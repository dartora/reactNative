import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type NavigationTypes = {
  Home: undefined;
  Tela1: {
    id: string;
  };
  Tela2: {
    id: string;
  };
  Tela3: {
    id: string;
  };
  Cart: undefined;
};

export type NavigationScreen = NativeStackScreenProps<NavigationTypes>;
