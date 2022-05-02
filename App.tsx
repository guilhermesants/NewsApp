import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Preload} from './src/pages/preload';
import {Welcome} from './src/pages/welcome';
import {Home} from './src/pages/home';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preload" screenOptions={{}}>
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
