import express from 'express';
import http from 'http';
import applicationRoutes from './routes';
import path from 'path';

const staticAssetsDirectory = path.join(__dirname, '../../static-assets');
const viewsDirectory = path.join(__dirname, './views');

function createServer() {
    const app = express();

    app.set('views', viewsDirectory);
    app.set('view engine', 'jade');

    app.use('/static/', express.static(staticAssetsDirectory));
    app.use('/', applicationRoutes);

    return app;
}

function start(port = 3000) {
    const app = createServer();

    return app.listen(port, () => {
        console.log('APP RUNNING');
    });
}

export {
    createServer,
    start,
    start as default
};
