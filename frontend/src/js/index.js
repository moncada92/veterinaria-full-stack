import React from 'react';
import { render } from 'react-dom';
import '../css/app.css';
import App from "./App";

//ReactDOM.render(<App />, document.getElementById('container'));
const container = document.getElementById('container');

function renderD() {
  render(<App />, container);
}
renderD();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderD();
  })
}
