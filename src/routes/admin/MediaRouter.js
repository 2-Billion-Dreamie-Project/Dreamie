import express from 'express';
import MediaController from '../../controllers/MediaController';
import { uploadFileMedia } from '../../middlewares/uploadFileMedia';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();

MediaRouter.get('/list-media', MediaCtlrIns.listMedias);
MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', uploadFileMedia, MediaCtlrIns.addMedia);

export default MediaRouter;
