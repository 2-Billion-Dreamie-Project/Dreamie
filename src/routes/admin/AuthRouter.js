import express from 'express';
import AuthController from '../../controllers/AuthController';

import hasAuthentication from '../../middlewares/hasAuthentication';
import validRegister from '../../middlewares/validRegister';

const AuthRouter   = express.Router();
const AuthCtlrIns  = new AuthController();

AuthRouter.get('/register',hasAuthentication, AuthCtlrIns.register);
AuthRouter.post('/register',validRegister, AuthCtlrIns.createUser);

AuthRouter.get('/login',hasAuthentication, AuthCtlrIns.login);
AuthRouter.get('/logout', AuthCtlrIns.logout);

AuthRouter.get('/list-users', AuthCtlrIns.getUsers);

export default AuthRouter;
