import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';

import App from 'containers';
import '@pma/ui/lib/styles.css';
import 'styles/global.scss';

const rootElement = document.getElementById('root');

render(<App />, rootElement);
