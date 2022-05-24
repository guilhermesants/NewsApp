import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ImageBackground
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
            <ImageBackground  
                style={styles.cardImage}
                imageStyle={styles.cardImageStyle}
                source={{uri:image}}
            >
                <TouchableOpacity 
                    onPress={() => share(url)}
                    activeOpacity={0.7}
                    style={styles.cardButtonShare}
                >   
                    <Icon name="share-alt" size={28} color="#000" />
                </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.cardDateNews}>{date}</Text>
            <Text style={styles.cardTitleNews}>{title}</Text>

            <View style={styles.cardButtons}>
                <TouchableOpacity 
                    onPress={() => moreInfo(url, image, date, title)}
                    activeOpacity={0.7}
                >
                    <View style={styles.cartButtonMoreInfo}>
                        <Text style={styles.cardTextMoreInfo}>Ver notícia</Text>
                        <Icon name="arrow-right" size={23} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
  }