import React from 'react';
import Flights from './features/flights/components/Flights';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Flights />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
