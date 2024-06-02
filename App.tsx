import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/routes';
import {Providers} from './src/context';

const App = () => {
  return (
    <NavigationContainer>
      <Providers>
        <Routes />
      </Providers>
    </NavigationContainer>
  );
};

export default App;
