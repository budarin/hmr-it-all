import fs from 'fs';
import path from 'path';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../common/App';

const app = express();

const prefix = `${process.env.NODE_ENV === 'development' ? './dist/' : './'}client/`;

try {
    console.log(`\n\nclient.js file length: ${fs.readFileSync(path.resolve(`${prefix}client.js`), 'utf8').length}`);
} catch (error) {
    console.log(error);
}

app.get('/api', (req, res) => {
    res.send({ message: 'I am a server route and can also be hot reloaded!' });
});

app.get('*', (req, res) => {
    const application = renderToString(<App />);

    const html = `<!doctype html>
    <html lang="ru-RU">
        <head>
            <meta charset="utf-8">
            <link rel="preload" href="/client.js" as="script">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="Sample HMR demo page.">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
            <br />
            <div>Server text</div>

            <script src="/client.js"></script>
        </body>
    </html>`;

    res.send(html);
});

export default app;
