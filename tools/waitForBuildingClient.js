const fs = require('fs');
const clientConfig = require('../webpack.config.client');

const checkTime = 1000;
const waitingFile = `${clientConfig.output.path}/assets-manifest.json`;

const timerId = setInterval(() => {
    const isExists = fs.existsSync(waitingFile);
    if (isExists) {
        clearInterval(timerId);
    } else {
        console.log(`wait for: "${waitingFile}"`);
    }
}, checkTime);
