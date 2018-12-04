import express from 'express';
// import AuthController from '../../controllers/AuthController';

const AuthRouter   = express.Router();
// const AuthCtlrIns  = new AuthController();

AuthRouter.get('/list-media', function(req, res) {
  res.render('admin/media/list-media');
});

export default AuthRouter;
