import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let PRODUCTS = {
  '1': {id: 1, category: 'Outside', price: '$59.99', name: 'Rake'},
  '2': {id: 2, category: 'Outside', price: '$3,000', name: 'Leaf Blower'},
  '3': {id: 3, category: 'Outside', price: '$5.00', name: 'Hose'},
  '4': {id: 4, category: 'Kitchen', price: '$49.99', name: 'Cutting Board'},
  '5': {id: 5, category: 'Kitchen', price: '$15.99', name: 'Knife'},
  '6': {id: 6, category: 'Kitchen', price: '$10', name: 'Bagel Cutter'}
};




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
