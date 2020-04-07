import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Header from './src/components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
