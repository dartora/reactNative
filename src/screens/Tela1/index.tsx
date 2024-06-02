import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {NavigationScreen, NavigationTypes} from '../../@types/navigation.types';
import {Header} from '../../components/Header';

type RouteTypes = RouteProp<NavigationTypes, 'Tela1'>;

export const Tela1 = ({navigation}: NavigationScreen) => {
  const route = useRoute<RouteTypes>();
  console.log(route.params.id);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header onPress={() => navigation.goBack()} />
      <Text>Tela1</Text>
    </View>
  );
};
