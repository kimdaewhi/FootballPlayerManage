import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// MSW
import { worker } from './msw/browsers';

// Redux
import store from './store/store';
import { Provider } from 'react-redux';

// 개발자 모드에서만 실행
if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
