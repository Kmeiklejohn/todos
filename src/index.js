import React from 'react';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import{render} from 'react-dom';

const Index = () => (

<BrowserRouter>
    <App/>
</BrowserRouter>
)
  render( <Index /> , document.getElementById('root'));
registerServiceWorker();
