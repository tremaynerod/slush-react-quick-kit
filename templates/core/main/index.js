import React from 'react';
import { render } from 'react-dom';
import App from './app/app.js';

render(<App />, document.getElementById('<%= appName %>-root'));