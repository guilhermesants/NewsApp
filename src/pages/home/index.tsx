import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image
} from 'react-native';
import {styles} from './styles';
import { ListComponent } from '../../components/newsList';
import {api} from '../../services/api';
import {getTopHeadLines, getEverything} from '../../services/News.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {INewsInterface} from '../../core/interfces/INewsInterface';
import uuid from 'react-native-uuid';
import {ComponentModal} from '../../components/componentmodal';

export const Home = () => {

    const [newsList, setnewslist] = useState<INewsInterface[]>([]);
    const [userName, setUserName] = useState<string>('');
    const [load, setLoad] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [messageAlert, setMessageAlert] = useState<string>('');

    useEffect(() => {
      getUser();
      getNews();
    }, [])

    const onRefresh = () => {
      setRefreshing(false);
      getNews();
    }

    const getUser = async () => {
      const name = await AsyncStorage.getItem('user');
      setUserName(JSON.parse(name));
    }

    const setUuidtoList = (articles: INewsInterface[]) => {
      const newsArticles: INewsInterface[] = articles.map((item) => {
        return {...item, id: uuid.v4()}
      });

      return newsArticles;
    }

    const getNews = async () => {

      try {
        const listOfNews = await getTopHeadLines();
        const { articles } = listOfNews.data;

        const newsArticles = setUuidtoList(articles);

        setnewslist(newsArticles);
      } catch (error) {
        showAlert(true, 'Ops! Algo deu errado, tente novamente mais tarde.')
      } finally {
        setLoad(false)
      } 
    }

    const handleSearch = async () => {
      if (search === '') return;
       
      setLoad(true);

      try {
        const listOfNews = await getEverything(search);
        const { articles } = listOfNews.data;

        if (articles.length !== 0) {
          const newsArticles = setUuidtoList(articles);
          setnewslist(newsArticles);
        } else {
          showAlert(true, 'Ops! Não foi encontrado nada para sua pesquisa.')
        }

      } catch (error) {
        showAlert(true, 'Ops! Algo deu errado, tente novamente mais tarde.')
      } finally {
        setSearch('');
        setLoad(false);
      }
    }

    const hideModal = () => {
      setModalVisible(false);
    }

    const showAlert = (showModal: boolean, message: string) => {
      setModalVisible(showModal);
      setMessageAlert(message);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container} >
              <View style={styles.view_header}>
                <Text style={styles.text_header}>Olá, {userName}</Text> 
                <Text style={styles.text_info}>Pesquise algo de seu interesse..</Text>
                <View style={styles.viewInput}>
                  <TextInput
                    onChangeText={setSearch}
                    value={search}
                    placeholder="Pesquisar ..."
                    placeholderTextColor="#000"
                    style={styles.input}
                  />
                    
                  <TouchableOpacity
                    onPress={handleSearch}
                    activeOpacity={0.7}
                    style={styles.buttonSearch}
                  >
                    <Image
                      style={styles.searchImage} 
                      source={require('../../assets/baseline_search_black_24dp.png')}/>
                  
                  </TouchableOpacity>
                </View>
              </View>

              {load ?
                <View>
                  <ActivityIndicator size='large' color='#000'/>
                </View> 
              : null }
              <ListComponent listOfNews={newsList} refreshing={refreshing} onRefresh={onRefresh}/>

              <ComponentModal showModal={modalVisible} message={messageAlert} hideModal={hideModal}/>
          </View>
        </SafeAreaView>
    )
}