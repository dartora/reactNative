import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type UserDataTypes = {
  id: string;
  token: string;
};

export interface ChildrenProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: UserDataTypes | null;
  setUser: Dispatch<SetStateAction<UserDataTypes | null>>;
  signed: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: ChildrenProps) => {
  const [user, setUser] = useState<UserDataTypes | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStorage = async () => {
    const storageUser = await AsyncStorage.getItem('@ModallHydra');
    if (storageUser) {
      setUser(JSON.parse(storageUser));
    }
    setLoading(false);
  };
  useEffect(() => {
    loadStorage();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        setUser,
        loading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
