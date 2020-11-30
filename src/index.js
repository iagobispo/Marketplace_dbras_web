import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Msg from './component/menssagem';


import {BrowserRouter} from 'react-router-dom';
import {Routes} from './routes';

import store from './store'
 


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Msg/>
    <Routes/>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


