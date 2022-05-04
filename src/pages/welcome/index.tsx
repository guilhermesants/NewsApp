import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';

export const Welcome = () => {

  const [name, setName] = useState<string>('');
  const navigation = useNavigation();

  const userContext = React.useContext(UserContext);
  
  const handleEnter = () => {
    enter();
  };

  async function enter () {
    if (name != '' && name !== undefined) {
      userContext.enter(name);
      navigation.navigate('Home', {user: name});
      setName('');
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.text_area}>
        <Text style={styles.wellcome_text}>Olá, seja bem vindo!</Text>
        <Text style={styles.wellcome_text}>
          Para começar, entre com apenas seu nome...
        </Text>
      </View>

      <View style={styles.input_area}>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Entre com o seu nome ..."
          placeholderTextColor="#555"
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleEnter}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
