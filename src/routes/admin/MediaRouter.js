import express from 'express';
import path from 'path';

import MediaController from '../../controllers/MediaController';
import { doUploadMedia } from '../../middlewares/doUploadMedia';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();

MediaRouter.get('/list-media', MediaCtlrIns.listMedias); 
MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', function (req, res, next) {
  doUploadMedia(req, res, function (err) {
    // if (err instanceof multer.MulterError) {
    //   // A Multer error occurred when uploading.
    //   res.json(err);
    // } else if (err) {
    //   // An unknown error occurred when uploading.
    //   res.json(err);
    // }

    next(err);

    // Everything went fine.
  })}, MediaCtlrIns.addMedia);

export default MediaRouter;
