import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IPropsSearch {
    handleSearch: (text: string) => {};
}

export const SearchField = ({ handleSearch }: IPropsSearch) => {

    const [search, setSearch] = useState<string>('')

    const handle = () => {
        if (search === '') return;

        handleSearch(search);
        setSearch('');
    }

    return (
        <>
            <TextInput
                onChangeText={setSearch}
                value={search}
                placeholder="Pesquisar ..."
                placeholderTextColor="#000"
                style={styles.input}
            />

            <TouchableOpacity
                onPress={handle}
                activeOpacity={0.7}
                style={styles.buttonSearch}
            >
                <Icon name="search" size={17} color="#000" />
            </TouchableOpacity>
       </>
    )
}