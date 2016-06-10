var passport = require('passport');
module.exports = {
  http: {
    customMiddleware: function (app) {
      console.log('http express midleware for passport');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};
