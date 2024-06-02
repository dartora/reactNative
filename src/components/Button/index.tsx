import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export const Button = ({text, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {rest.disabled ? (
        <ActivityIndicator size={30} color={'#fff'} />
      ) : (
        <Text style={{fontSize: 20, color: 'white'}}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
});
