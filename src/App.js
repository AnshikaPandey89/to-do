import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid" style={{ background: 'linear-gradient(to top, #1B1A55 , #E19898)', minHeight: '100vh' }}>
        <div className="container ">
          <h1 className="text-center mb-4 pt-5 text-muted">To-do List</h1>
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
