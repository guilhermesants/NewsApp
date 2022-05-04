/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
        View,
        SafeAreaView,
        ActivityIndicator,
    } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';

import {styles} from './styles';

export const Preload = () => {

    const navigation = useNavigation();
    const userContext = React.useContext(UserContext);

    useEffect(() => {
        checkFirstAccess();
    }, [])

    async function checkFirstAccess(){
        const userName = await userContext.getUser();
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

