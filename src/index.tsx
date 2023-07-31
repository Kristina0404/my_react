import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Apple from './Apple/Apple';
import Pizza from './Pizza/Pizza';
import Message from './Message/Message';
import Pet from './Pet/Pet';
import Consultation from './Consultation/Consultation';
import RandomActivity from './RandomActivity/RandomActivity';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <>
    <Apple />
    <Pizza />
    <Message msg="hello from index" title='My msg is ' />
    <Pet />
    <Consultation />
    <RandomActivity/>
    </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
