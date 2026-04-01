import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StartRating from './StartRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <StartRating maxRating={5}  size={30} messages={["Terrible","Bad","Okay","Good","Amazing"]} className="" defaultRating={1}/> */}
    <App />
  </React.StrictMode>
);

