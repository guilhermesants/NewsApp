import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {getNewsDetails} from '../../services/UrlService';


export const Details = ({route, navigation}) => {

    const { url, urlImage, date, title } = route.params;
    const [noticeDetails, setNoticeDetails] = useState<string>();
    const [load, setLoad] = useState<boolean>(true);

    useEffect(() => {
        getDetails()
    }, [])

    const getDetails = async () => {
        const data = await getNewsDetails(url);

        console.log(data);
        setNoticeDetails(data);
        setLoad(false);
    }
   
    return (
        <View style={styles.safeArea}>
           
            {load ? 
            <View style={styles.viewIndicator}>
                <ActivityIndicator size='large' color='#000'/>
            </View>
            :
            <ScrollView>
                <View style={styles.viewText}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.textTitle}>{title}</Text>
                    </View>
                    <Image  
                        style={styles.box_image}
                        source={{uri:urlImage}}
                    />
                    <Text style={styles.textDate}>Data de publicação: {date}</Text>
                    
                    <View style={styles.viewAreaContent}>
                        <Text style={styles.text}>{noticeDetails}</Text>
                    </View>
                </View>
            </ScrollView> }
        </View>
    )
}