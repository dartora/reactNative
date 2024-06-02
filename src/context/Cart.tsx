import React from 'react';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type CartDataTypes = {
  id: string;
  name: string;
};

export interface ChildrenProps {
  children: React.ReactNode;
}

interface CartContextProps {
  data: CartDataTypes[];
  setData: Dispatch<SetStateAction<CartDataTypes[]>>;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider = ({children}: ChildrenProps) => {
  const [data, setData] = useState<CartDataTypes[]>([]);

  return (
    <CartContext.Provider
      value={{
        data,
        setData,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
