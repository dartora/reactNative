import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

type InputProps = TextInputProps;

export const Input = ({...rest}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...rest} placeholderTextColor={'#000'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  input: {
    color: '#000',
    fontSize: 20,
  },
});
