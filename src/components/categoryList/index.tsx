import React from 'react';
import {
    Text,
    TouchableOpacity,
    FlatList,
    View
  } from 'react-native';

import { Category } from '../../utils/category/Category';
import {styles} from './styles';

interface IProps {
    listOfCategories: Category[];
    search: (name?: string) => {}
}

export const CategoryComponent = ({listOfCategories, search}: IProps) => {
    return (
        <FlatList
            data={listOfCategories}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> (
                <TouchableOpacity
                    onPress={() => search(item.name)}
                    activeOpacity={0.7}
                    style={styles.button}
                >
                    <Text style={item.selected ? styles.colorEnable : styles.colorDisable}>{item.translatedName}</Text>
                </TouchableOpacity>
            )}
        />
    )
}