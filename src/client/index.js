import React from 'react';
import ReactDOM from 'react-dom';
import App from '../common/App';

ReactDOM.hydrate(<App />, document.getElementById('root'));

fetch('/api')
    .then((res) => {
        res.text().then((txt) => console.log(`API call: ${txt}`));
    })
    .catch((err) => console.log(`API error: ${err}`));
