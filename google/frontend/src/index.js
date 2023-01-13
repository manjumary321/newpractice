import React from 'react';
import ReactDOM from 'react-dom/client';

import getGoogleUserInfo from './google-get-user.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <getGoogleUserInfo />
  </React.StrictMode>
);


