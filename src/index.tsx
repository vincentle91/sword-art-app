import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// We check the directory relative to the file 
import {App} from './Components/App';

// Create a root element in DOM
//React DOM library is used to interact with DOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


