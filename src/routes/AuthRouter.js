import express from 'express';
import AuthController from '../controllers/AuthController';
import UserModel from '../models/UserModel';

const AuthRouter   = express.Router();
const AuthCtlrIns  = new AuthController(new UserModel);

AuthRouter.get('/register', AuthCtlrIns.register);

AuthRouter.post('/register', AuthCtlrIns.createUser);

export default AuthRouter;
