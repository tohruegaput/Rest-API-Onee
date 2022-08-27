const LocalStrategy = require('passport-local').Strategy;
const { getHashedPassword } = require('./function');
const { User } = require('../database/model');

module.exports = function(passport) {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            let hashed = getHashedPassword(password)
            User.findOne({username: username}).then(users => {
                if (!users) return done(null, false, {
                    message: 'Username tidak terdaftar',
                })
                if (username === users.username && hashed === users.password) {
                    return done(null, users);
                } else {
                    return done(null, false, {
                        message: 'Username Atau Password Tidak Valid',
                    });
                };
            });
        })
    );
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
    
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}