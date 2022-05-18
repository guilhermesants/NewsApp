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
import {INewsInterface} from '../../core/interfces/INewsInterface';
import uuid from 'react-native-uuid';
import {ComponentModal} from '../../components/componentmodal';
import {CategoryComponent} from '../../components/categoryList';
import {UserContext} from '../../context/UserContext';
import { CategoryList } from '../../utils/category/Category';

export const Home = () => {

    const [newsList, setnewslist] = useState<INewsInterface[]>([]);
    const [load, setLoad] = useState<boolean>();
    const [search, setSearch] = useState<string>('');
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [messageAlert, setMessageAlert] = useState<string>('');
    const [categoryList, setCategoryList] = useState(CategoryList);

    const userContext = React.useContext(UserContext);

    useEffect(() => {
      getNews();
    }, [])

    const onRefresh = () => {
      setRefreshing(false);
      getNews();
    }

    const setUuidtoList = (articles: INewsInterface[]) => {
      const newsArticles: INewsInterface[] = articles.map((item) => {
        return {...item, id: uuid.v4()}
      });

      return newsArticles;
    }

    const resetCategoryList = () => {
      const list = categoryList.map((item) => {
        return {...item, selected: false}
      })
      return list;
    }

    const checkSelectedCategory = (categoryName?: string) => {
      if (categoryName) {        
        let category = categoryList.map((item) => {
          if (item.name === categoryName) {
            return {...item, selected: true}
          }
          return {...item, selected: false};
        });

        setCategoryList(category)
      } else {
        setCategoryList(resetCategoryList())
      }
    }

    const getNews = async (categoryName?: string) => {

      setLoad(true)
      checkSelectedCategory(categoryName);

      try {

        const listOfNews = categoryName ? await getTopHeadLines(categoryName) : await getTopHeadLines();

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
                <Text style={styles.text_header}>Olá, {userContext.name}</Text> 
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

                <CategoryComponent listOfCategories={categoryList} search={getNews}/>
                
              </View>
              
              {load ?
                  <View style={styles.viewIndicator}>
                      <ActivityIndicator size='large' color='#000'/>
                  </View>
              : 
                  <ListComponent listOfNews={newsList} refreshing={refreshing} onRefresh={onRefresh}/>
              }

              <ComponentModal showModal={modalVisible} message={messageAlert} hideModal={hideModal}/>
          </View>
        </SafeAreaView>
    )
}