import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Bicycle1} from './bicycle/bicycle1/bicycle1';
import {Bicycle2} from './bicycle/bicycle2/bicycle2';
import {Bicycle3} from './bicycle/bicycle3/bicycle3';
import {Bicycle4} from './bicycle/bicycle4/bicycle4';
import {Bicycle5} from './bicycle/bicycle5/bicycle5';
import {Bicycle6} from './bicycle/bicycle6/bicycle6';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <Bicycle1 /> */}
  </React.StrictMode>,
);
