import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_cs from "./assets/translations/cs/common.json";
import common_en from "./assets/translations/en/common.json";
import { BrowserRouter } from 'react-router-dom';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'cs',                              // language to use
    resources: {
        en: {
            common: common_en          
        },
        cs: {
            common: common_cs
        },
    },
});


ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
  </React.StrictMode>
</BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
