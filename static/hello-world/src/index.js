import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@atlaskit/css-reset';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'),
  
);
function processInput() {
  let dateTime = document.getElementById("datetime").value;
  console.log(("Entered Date and Time: " + dateTime));
}