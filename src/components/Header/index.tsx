import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type HeaderProps = TouchableOpacityProps;

export const Header = ({...rest}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...rest}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
});
