var express = require('express');
var router = express.Router();
const passport = require('passport');
const {
  login,
  signup,

} = require('../controller/auth.controller');

router.post('/user/signup' , signup);

router.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
  }));


router.get('/auth/google/callback', passport.authenticate('google'));

router.get('/api/logout', (req, res) => {
      req.logout();
      res.send(req.user);
  });

router.get('/api/current_user', (req, res) => {
      res.send(req.user);
  });

module.exports = router;