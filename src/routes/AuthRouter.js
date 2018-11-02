import express from 'express';
import AuthController from '../controllers/AuthController';

const AuthRouter = express.Router();
const AuthCtlrIns = new AuthController();

AuthRouter.get('/register', AuthCtlrIns.register);

AuthRouter.post('/register', AuthCtlrIns.createUser);

export default AuthRouter;
