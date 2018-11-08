import { User } from '../db';

export default function passportConfig(passport, LocalStrategy) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, 
    function(email, password, done) {
      User.findOne({ email }, function (err, user) {
        if (err) { return done(err); }

        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }

        if (!user.comparePassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, {
          _id: user._id,
          userName: user.userName,
          email: user.email
        });
      }).catch(function (err) {
        console.log(err);
        done(err);
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(_id, done) {
    User.findById(_id, function(err, user) {
      done(null, {
        _id: user._id,
        userName: user.userName,
        email: user.email
      });
    }).catch(function (err) {
      console.log(err);
      done(err);
    });
  });
}
