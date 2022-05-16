import React from 'react';
import {
    Text,
    TouchableOpacity,
    FlatList,
    View,
    Image,
    Share,
    RefreshControl,
    Linking
  } from 'react-native';
  import { format } from 'date-fns';

  import { useNavigation } from '@react-navigation/native';
  import {INewsInterface} from '../../core/interfces/INewsInterface';
  import {styles} from './styles';

  interface IpropsListComponent {
    listOfNews: INewsInterface[];
    refreshing: boolean;
    onRefresh: () => {};
  }

  export const ListComponent = ({listOfNews, refreshing, onRefresh}: IpropsListComponent) => {

    const navigation = useNavigation();
    console.log(listOfNews);

    const moreInfo = (url: string, urlImage: string, date: string, title: string) => {
        const dateNews = formatDate(date);
        navigation.navigate('Detalhes', {url: url, urlImage: urlImage, date: dateNews, title: title})
        //Linking.openURL(url);
    }

    const shareWhatsApp = async (url: string) => {
       const result = await Share.share({
           message: url,
       })
    }

    const formatDate = (date: string) => {
        return format(new Date(date), 'dd/MM/yy')
    }

    return (
        <FlatList
            data={listOfNews}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={styles.view_image}>
                    <View style={styles.text_area}>
                        <Text style={styles.text}> {item.title ? item.title : item.description}</Text>
                        <Text style={styles.text}> {formatDate(item.publishedAt)}</Text>
                    </View>
                    <Image  
                        style={styles.box_image}
                        source={{uri:item.urlToImage}}
                        />

                    <View style={styles.viewButtons}>
                        <TouchableOpacity 
                            onPress={() => moreInfo(item.url, item.urlToImage, item.publishedAt, item.title)}
                            activeOpacity={0.7}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Saiba mais</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => shareWhatsApp(item.url)}
                            activeOpacity={0.7}
                            style={styles.button}
                        >
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.buttonText}>Compartilhar</Text>
                                <Image 
                                    style={styles.shareIcon}
                                    source={require('../../assets/share-icon.png')}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        />
    )
  }