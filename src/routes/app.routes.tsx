import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Tela1} from '../screens/Tela1';
import {Tela2} from '../screens/Tela2';
import {Tela3} from '../screens/Tela3';
import {NavigationTypes} from '../@types/navigation.types';
import {Cart} from '../screens/Cart';

const Stack = createNativeStackNavigator<NavigationTypes>();

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios',
      }}>
      <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Tela1" component={Tela1}></Stack.Screen>
      <Stack.Screen name="Tela2" component={Tela2}></Stack.Screen>
      <Stack.Screen name="Tela3" component={Tela3}></Stack.Screen>
    </Stack.Navigator>
  );
};
