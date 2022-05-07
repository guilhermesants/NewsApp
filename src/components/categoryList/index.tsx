import React from 'react';
import {
    Text,
    TouchableOpacity,
    FlatList,
    View
  } from 'react-native';

import { Category } from '../../utils/category/Category';
import {styles} from './styles';

export const CategoryComponent = ({listOfCategories}: Category[]) => {
    return (
        <FlatList
            data={listOfCategories}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> (
                <TouchableOpacity
                    onPress={() => {}}
                    activeOpacity={0.7}
                    style={styles.button}
                >
                    <Text style={styles.text}>{item.translatedName}</Text>
                </TouchableOpacity>
            )}
        />
    )
}