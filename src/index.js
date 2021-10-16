import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//   IMPORTED FROM SERVICE WORKER FILE's index.js
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  

//   IMPORTED FROM SERVICE WORKER FILE's index.js
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();