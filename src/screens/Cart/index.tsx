import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { NavigationScreen } from '../../@types/navigation.types';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useCart } from '../../context/Cart';

const dataMock = [
  {
    id: '1',
    name: 'Arroz',
  },
  {
    id: '2',
    name: 'Feijão',
  },
];

type CartDataTypes = {
  id: string;
  name: string;
};

export const Cart = ({ navigation }: NavigationScreen) => {
  const { data, setData } = useCart();

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Header onPress={() => navigation.goBack()} />
      <FlatList
        data={dataMock}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => setData([...data, item])}
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'black',
                marginBottom: 20,
              }}>
              <Text style={{ color: 'white' }}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />

      <Button
        text="Ir para o Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
