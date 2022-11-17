import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import App from './App'; 
import { configureStore } from '@reduxjs/toolkit';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

const store = configureStore ({reducer: {todos: todos, visibilityFilter: visibilityFilter}});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);
