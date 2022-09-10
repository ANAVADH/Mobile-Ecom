import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store , persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
        <App />
        </HelmetProvider>
   
    </PersistGate>
    </Provider>
    </BrowserRouter>




    
  
  
);
reportWebVitals();
