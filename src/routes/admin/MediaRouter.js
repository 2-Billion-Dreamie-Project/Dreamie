import express from 'express';
import MediaController from '../../controllers/MediaController';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();

MediaRouter.get('/list-medias', MediaCtlrIns.listMedias); 
MediaRouter.post('/get-medias', MediaCtlrIns.getMedias); 

MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', MediaCtlrIns.errorHandleUpload, MediaCtlrIns.addMedia);

MediaRouter.get('/detail-media/:_id', MediaCtlrIns.viewDetailMedia);

export default MediaRouter;
