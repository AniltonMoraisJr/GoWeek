const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

/* Tweets Controller routes */
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
/* Like Controller routes */
routes.put('/likes/:id', LikeController.store);
module.exports = routes;