import React from 'react';
import {Text, View} from 'react-native';
import {NavigationTypes} from '../../@types/navigation.types';
import {RouteProp, useRoute} from '@react-navigation/native';

type RouteTypes = RouteProp<NavigationTypes, 'Tela3'>;

export const Tela3 = () => {
  const route = useRoute<RouteTypes>();
  console.log(route.params.id);
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text>Tela3</Text>
    </View>
  );
};
