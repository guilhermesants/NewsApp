import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Preload} from '../pages/preload';
import {Welcome} from '../pages/welcome';
import {Home} from '../pages/home';

export const Routes: React.FC = () => {
    return (
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
    )
}