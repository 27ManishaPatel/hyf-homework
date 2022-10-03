import React from 'react';
import ReactDOM from 'react-dom/client';
import './Todo.css';
import ToDo from './Todo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);

reportWebVitals();
