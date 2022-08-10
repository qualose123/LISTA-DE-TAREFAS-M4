import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <BrowserRouter>
    <App />
    </BrowserRouter>
=======
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 4f16813d692758bcfb1623c63546e36fe2f85fbf
);

