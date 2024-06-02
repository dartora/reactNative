import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationScreen} from '../../@types/navigation.types';
import {useCart} from '../../context/Cart';
import {useAuth} from '../../context/Auth';

export const data2 = [
  {id: '1', produto: 'teste 1'},
  {id: '2', produto: 'teste 2'},
  {id: '3', produto: 'teste 3'},
];

export const Home = ({navigation}: NavigationScreen) => {
  const {data} = useCart();
  const {user} = useAuth();
  console.log(user);

  return (
    <View style={styles.container}>
      <Text>Quantidade de produtos {data.length}</Text>
      <FlatList
        data={data2}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Tela1', {id: item.id})}
                style={styles.card}>
                <Text>{item.produto}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Tela2', {id: '1'})}
        style={styles.card}>
        <Text>Tela 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tela3', {id: '2'})}
        style={styles.card}>
        <Text>Tela 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});
