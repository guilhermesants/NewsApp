import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './src/routes';
import { UserProvider } from './src/context/UserContext';

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <Routes />
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
