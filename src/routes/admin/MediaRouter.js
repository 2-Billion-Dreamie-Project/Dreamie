import express from 'express';
import multer from 'multer';

import MediaController from '../../controllers/MediaController';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();
const upload = multer({ 
  dest: 'src/storages/', 
});

MediaRouter.get('/list-media', MediaCtlrIns.listMedias); 
MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', upload.single('media'), MediaCtlrIns.addMedia);

export default MediaRouter;
