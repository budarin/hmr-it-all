import http from 'http';
import app from './server';

const PORT = 3001;
let currentApp = app;

const server = http.createServer(app);
server.listen(PORT);

console.log(`\nServer run on http://localhost:${PORT}\n`);

if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeListener('request', currentApp);
        server.on('request', app);
        currentApp = app;
    });
}
