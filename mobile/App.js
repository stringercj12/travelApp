import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        style={{ backgrounColor: 'transparent' }}
        barStyle='light-content'
      />
      <Route />
    </NavigationContainer>
  );
}
