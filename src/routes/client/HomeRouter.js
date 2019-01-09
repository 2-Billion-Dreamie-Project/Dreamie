import express from 'express';
import HomeController from '../../controllers/HomeController';

const HomeRouter = express.Router();
const HomeCtlrIns = new HomeController();

HomeRouter.get('/', HomeCtlrIns.index);

export default HomeRouter;
