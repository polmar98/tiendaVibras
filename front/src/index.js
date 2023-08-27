import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import  store  from './Redux/store.js';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
const domain ='dev-6up6fs0uxdxoerxa.us.auth0.com';
const client ='v3lf5B3mbjWUc5LsS49tOO4XFFRTeQ64';
const secret ='ZYR0Ij2nkWQD1n39WEOexse0w--h9pRvqHPI3M8cOxAh8Q9d-uXUdM6ia-H5oE3J';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
     <Auth0Provider domain={domain} clientId={client} redirectUri={window.location.origin} >
        <BrowserRouter>
           <React.StrictMode>
              <App />
           </React.StrictMode>
        </BrowserRouter>
     </Auth0Provider>
  </Provider>
  
);


