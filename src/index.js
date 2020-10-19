import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import {store} from './app/redux/store'

import './index.css';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './app/Common/ScrollToTop/ScrollToTop';

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
         <App />
      </BrowserRouter>
   </Provider>
  
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
