import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {login} from '../../services/endpoints';
import {loginSchema} from '../../schemas/login.schemas';
import {useAuth} from '../../context/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SchemaProps = 'email' | 'password';

export const Login = () => {
  const {
    handleSubmit,
    formState: {errors},
    reset,
    control,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const {setUser} = useAuth();

  const [loadingButton, setLoadingButton] = useState(false);

  const onSubmitHandler = async (data: any) => {
    setLoadingButton(true);
    try {
      console.log(data);
      const resp = await login(data.email.toLowerCase(), data.password);
      console.log(resp);
      const user = {id: resp.id, token: resp.token};
      await AsyncStorage.setItem('@ModallHydra', JSON.stringify(user));
      setUser(user);
    } catch (e) {
      const error = e as Error;
      console.log(error);
    } finally {
      setLoadingButton(false);
    }
  };

  const onChangeInput = (value: string, field: SchemaProps) => {
    setValue(field, value, {shouldValidate: true});
  };

  const emailValue = watch('email');

  return (
    <View style={styles.container}>
      <Input
        onChangeText={e => onChangeInput(e, 'email')}
        value={emailValue && emailValue}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => {
          return (
            <Input
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          );
        }}
      />
      <Button
        disabled={loadingButton}
        onPress={handleSubmit(onSubmitHandler)}
        text="Enviar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 10,
    paddingTop: 40,
  },
});
