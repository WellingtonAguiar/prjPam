import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

import { HomeScreen } from './HomeScreen';
import { CategoriaScreen } from './CategoriaScreen';
import { CadastroScreen } from './CadastroScreen';
import { DevScreen } from './DevScreen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator inittialRouteName='HomeScreen'>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='CategoriaScreen' component={CategoriaScreen} option={{ headerShown: false }} />
      <Stack.Screen name='DevScreen' component={DevScreen} option={{ headerShown: false }} />
      <Stack.Screen name='CadastroScreen' component={CadastroScreen} option={{ headerShown: false }} />
    </Stack.Navigator>
  );
}