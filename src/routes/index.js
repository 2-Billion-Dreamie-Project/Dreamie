import isAuthentication from '../middlewares/isAuthentication';
import AuthRouter from './AuthRouter';
import validLogin from '../middlewares/validLogin';

export default function routes(app, passport) {
  
  // Authentication Passport login
  app.post('/auth/login', validLogin,
    passport
      .authenticate(
        'local',
        {
          successRedirect: '/user/profile',
          failureRedirect: '/auth/login',
          failureFlash: 'Sai email hoặc mật khẩu!'
        },
      )
  );
  
  // Router Authentication
  app.use('/auth', AuthRouter);

  // Router profile
  app.get('/user/profile', isAuthentication, function (req, res) {
    const { user } = req;
    res.render('user/profile', user);
  });

  // Router index
  app.get('/', function (req, res) {
    res.render('index');
  });
}
