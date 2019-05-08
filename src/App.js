import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <h1>Hello World</h1>
        <TodoList />
      </Fragment>
    </Provider>
  );
}

export default App;
