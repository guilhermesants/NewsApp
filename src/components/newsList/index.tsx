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

  import { Format } from '../../utils/date/FormatDate';
  import { useNavigation } from '@react-navigation/native';
  import {INewsInterface} from '../../core/interfces/INewsInterface';
  import { Card } from '../card';

  interface IpropsListComponent {
    listOfNews: INewsInterface[];
    refreshing: boolean;
    onRefresh: () => {};
  }

  export const ListComponent = ({listOfNews, refreshing, onRefresh}: IpropsListComponent) => {

    const navigation = useNavigation();
    console.log(listOfNews);

    const moreInfo = (url: string, urlImage: string, date: string, title: string) => {
        navigation.navigate('Detalhes', {url: url, urlImage: urlImage, date: date, title: title})
        //Linking.openURL(url);
    }

    const share = async (url: string) => {
       const result = await Share.share({
           message: url,
       })
    }

    const formartTitle = (title: string) => {
        return title.length > 90 ? title.substring(0, 90) + '...' : title;
    }

    return (
        <FlatList
            data={listOfNews}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <Card 
                    url={item.url}
                    title={item.title ? formartTitle(item.title) : formartTitle(item.description)}
                    date={Format.formatDate(item.publishedAt)}
                    image={item.urlToImage}
                    moreInfo={moreInfo}
                    share={share}
                />
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