import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { location } from './location-details';

render(<App location={location} />, document.getElementById('root'));
