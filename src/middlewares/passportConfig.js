import { User } from '../db';

/**
 * @constructor
 * passportConfig
 * @param {object} passport - The passport of the middleware.
 * @param {object} LocalStrategy - The LocalStrategy of the passpor-local.
 */
export default function passportConfig(passport, LocalStrategy) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, 
    function(email, password, done) {
      try {
        User.findOne({ email }, function (err, user) {
          if (err) { return done(err); }
  
          if (!user) {
            return done(null, false);
          }
  
          if (!user.comparePassword(password)) {
            return done(null, false);
          }
  
          return done(null, {
            _id: user._id,
            userName: user.userName,
            email: user.email
          });
        });
      } catch (err) {
        console.log(err);
        done(err);
      }
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(_id, done) {
    try {
      if (_id) {
        User.findById(_id, function(err, user) {
          if (err) { return done(err); }

          if (!user) {
            return done(null, false);
          }

          done(null, {
            _id: user._id,
            userName: user.userName,
            email: user.email
          });
        })
      } else {
        done(null, false);
      }
    } catch (err) {
      console.log(err);
      done(err);
    }
  });
}
