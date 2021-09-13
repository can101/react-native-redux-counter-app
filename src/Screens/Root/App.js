import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from '../Tools/Home';
import configureStore from '../../redux/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}


export default App
