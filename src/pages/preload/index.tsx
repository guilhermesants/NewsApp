/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
        View,
        SafeAreaView,
        ActivityIndicator,
    } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles';

export const Preload = () => {

    const navigation = useNavigation();

    useEffect(() => {
        checkFirstAccess();
    }, [])

    async function checkFirstAccess(){
        const userName = await AsyncStorage.getItem('user');
        userName ? navigation.navigate('Home') : navigation.navigate('Welcome'); 
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <ActivityIndicator size='large' color='#000'/>
            </View>
        </SafeAreaView>
    );
}

