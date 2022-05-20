import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image,
  } from 'react-native';

  import {styles} from './styles';
  import Icon from 'react-native-vector-icons/FontAwesome'

  interface IPropsCard {
      url: string;
      title: string;
      date: string;
      image: string;
      moreInfo: () => {}
      share: () => {}
  }

  export const Card = ({url, title, date, image, moreInfo, share}: IPropsCard) => {
    
    return (
        <View style={styles.cardArea}>
            <Image  
                style={styles.cardImage}
                source={{uri:image}}
                />
            <Text style={styles.cardDateNews}>{date}</Text>
            <TouchableOpacity 
                    onPress={() => moreInfo(url, image, date, title)}
                    activeOpacity={0.7}
                >
                <Text style={styles.cardTitleNews}>{title}</Text>
            </TouchableOpacity>
            

            <View style={styles.cardButtons}>
                <TouchableOpacity 
                    onPress={() => share(url)}
                    activeOpacity={0.7}
                >
                    <Icon name="share-alt" size={28} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
  }