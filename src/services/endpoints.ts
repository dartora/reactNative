import axios, {AxiosError} from 'axios';
export const wsaccesscontrol =
  'http://apps.modallport.com.br:81/wsaccesscontrol';
///import NetInfo from '@react-native-community/netinfo';

export const login = async (user: string, pass: string) => {
  try {
    //   const netInfoState = await NetInfo.fetch();
    //   if (!netInfoState.isConnected) {
    //     throw new Error('Sem conexão com a internet');
    //   }
    const response = await axios.get(`${wsaccesscontrol}/WS/Login`, {
      headers: {
        user,
        pass,
      },
    });
    if (response.data.sucess == false) {
      throw new Error(response.data.itens[0].mensagem);
    } else {
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (!axiosError.response) {
        throw new Error('Problema de conexão de rede');
      } else {
        throw error;
      }
    } else {
      throw error;
    }
  }
};
