import React from 'react';
import {CartProvider, ChildrenProps} from './Cart';
import {AuthProvider} from './Auth';

export const Providers = ({children}: ChildrenProps) => {
  return (
    <CartProvider>
      <AuthProvider>{children}</AuthProvider>
    </CartProvider>
  );
};
