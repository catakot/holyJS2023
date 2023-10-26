import React from 'react';
import {ConfigProvider, theme} from 'antd';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import './common.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
