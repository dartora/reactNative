import React, {useEffect, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {Button} from '../Button';

export const Cat = () => {
  const [number, setNumber] = useState<number>(0);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('entrou na página');
    //Fazer uma chamada para a api
  }, []);

  useEffect(() => {
    console.log('entrou na página');
    //Fazer uma chamada para a api
    if (!loading) {
      console.log('carregou a página');
    }
  }, [loading]);

  console.log(text);
  return (
    <>
      <TextInput
        placeholder="Valor"
        value={text}
        onChangeText={e => setText(e)}
      />
      <Text style={{fontSize: 40}}>{number}</Text>
      <Button text="Aumentar" onPress={() => setNumber(number + 1)} />
      <Button text="Parar o carregamento" onPress={() => setLoading(false)} />
      {loading ? <Text>Loading</Text> : <Text>Carregado</Text>}
    </>
  );
};
