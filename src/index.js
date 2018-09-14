import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loopback from './Loopback';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Loopback />, document.getElementById('root'));
registerServiceWorker();
