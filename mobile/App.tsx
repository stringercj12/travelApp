import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { RootStackParamList } from './src/routes/interfaces/RootStackParamList';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        showHideTransition="fade"
        backgroundColor={"transparent"}
      />
      <Routes />
    </NavigationContainer>
  );
}
