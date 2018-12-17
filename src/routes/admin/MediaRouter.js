import express from 'express';
import multer from 'multer';
import path from 'path';

import MediaController from '../../controllers/MediaController';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/storage');
  },
  filename: function (req, file, cb) {
    cb(null, path.parse(file.originalname).name + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage, 
  fileFilter (req, file, cb) {
    let ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return cb('Error file ext', false)
    }

    cb(null, true)
  },
}).single('media');

MediaRouter.get('/list-media', MediaCtlrIns.listMedias); 
MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', function (req, res, next) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.json(err);
    } else if (err) {
      // An unknown error occurred when uploading.
      res.json(err);
    }

    next(err);

    // Everything went fine.
  })}, MediaCtlrIns.addMedia);

export default MediaRouter;
