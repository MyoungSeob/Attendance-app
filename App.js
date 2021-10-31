import React from 'react';
import StackContainer from './src/navigation/StackContainer';
import { Provider } from 'react-redux';
import {store} from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <StackContainer />
    </Provider>
  );
};

export default App;
