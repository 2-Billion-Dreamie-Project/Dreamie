import AuthRouter from './admin/AuthRouter';
import DemoRouter from './DemoRouter';
import PartnerRouter from './admin/PartnerRouter';

import SliderRouter from './admin/SliderRouter';
import CategoryRouter from './admin/CategoryRouter';

import HomeRouter from './client/HomeRouter';

import isAuthentication from '../middlewares/isAuthentication';
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

  // Router Demo
  app.use('/demo', DemoRouter);

  /***** ROUTER CLIENT *****/

  // Router Home
  app.use('/', HomeRouter);

  /***** ROUTER ADMIN *****/

  // Router Partner
  app.use('/admin/partner', PartnerRouter);

  // Router Slider
  app.use('/admin/slider', SliderRouter);

  // Router Slider
  app.use('/admin/category', CategoryRouter);

  // Router profile
  // app.get('/user/profile', isAuthentication, function (req, res) {
  //   const { user } = req;
  //   res.render('user/profile', user);
  // });

  // Router index
  // app.get('/', function (req, res) {
  //   res.render('home');
  // });
}
