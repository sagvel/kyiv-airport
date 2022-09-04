import React from 'react';
<<<<<<< HEAD

const App = () => {
  return <div>App</div>;
};

export default App;


// Algorithm
// 1. Сформировать структуру компонентов
// 2. Подключить Redux к проекту и определить начальное состояние
// 3. Прописать логику запросов на api и записать данные в state
// 4. Реализовать переключение между Departed/Arrival
// ...
=======
import Flights from './features/flights/components/Flights';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Flights />
    </Provider>
  );
};

export default App;
>>>>>>> 6e8dfe5e4a3e9eb39817a153f45a4b7616e97cd0
