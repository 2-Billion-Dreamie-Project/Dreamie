import express from 'express';
import MediaController from '../../controllers/MediaController';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();

MediaRouter.get('/list-media', MediaCtlrIns.listMedias); 
MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', MediaCtlrIns.errorHandleUpload, MediaCtlrIns.addMedia);

export default MediaRouter;
