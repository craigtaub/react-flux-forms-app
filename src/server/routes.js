import express from 'express';
import renderer from './middleware/renderer';

const router = express.Router();

router.get('/', function indexRoute(request, response, next) {
    console.log('called index route');
    next();
});

router.use(renderer);

export default router;
