import express from 'express';
import renderer from './middleware/renderer';

const router = express.Router();

router.get('/', function indexRoute(request, response, next) {
    next();
});

// for the browser
router.get('/favicon.ico', function (request,response) {
    response.status(200).end();
});

router.get('/index', function getEdit(request, response, next) {
  // for non-js + page refresh takes from db.
  response.locals = {
    seedData: {
      DataStore: {
        data: {
          email: 'default email',
          error: false
        }
      }
    }
  };
  next();
});

router.get('/edit', function getEdit(request, response, next) {
  // for non-js + page refresh takes from db.
  response.locals = {
    seedData: {
      DataStore: {
        data: {
          email: 'default email',
          error: false
        }
      }
    }
  };
  next();
});

router.post('/edit', function postEdit(request, response, next) {

    if (request.body.newEmail.length < 4) {
        response.locals = {
          seedData: {
            DataStore: {
              data: {
                email: request.body.newEmail,
                error: 'too short'
              }
            }
          }
        };
        next();
    } else {
        return response.redirect('/index?updated=email');
    }
});

router.use(renderer);

export default router;
