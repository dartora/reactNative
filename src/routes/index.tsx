import React from 'react';
import {AuthRoutes} from './auth.routes';
import {useAuth} from '../context/Auth';
import {AppRoutes} from './app.routes';
import {View} from 'react-native';

export const Routes = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return <View></View>;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};
