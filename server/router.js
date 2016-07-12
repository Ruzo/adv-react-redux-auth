const Authorization = require('./controllers/authorization');
const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false});

const protectedData = {
    secretAPI: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
};

module.exports = function(app){
  app.get('/', requireAuth, function(req, res) {
    res.send(protectedData);
  });

  app.post('/signup', function(req, res, next){
    Authorization.signup(req, res, next);
  });

  app.post('/signin', requireLogin, function(req, res, next) {
    Authorization.signin(req, res, next);
  });
};