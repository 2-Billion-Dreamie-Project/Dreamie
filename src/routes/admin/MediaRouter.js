import express from 'express';
import multer from 'multer';

import MediaController from '../../controllers/MediaController';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();
function fileFilter (req, file, cb) {

  console.log({ req, file });

  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  // To reject this file pass `false`, like so:
  // cb(null, false)

  // To accept the file pass `true`, like so:
  // cb(null, true)

  // You can always pass an error if something goes wrong:
  // cb(new Error('I don\'t have a clue!'))

}

const upload = multer({ 
  dest: 'src/storages/', 
  fileFilter,
});

MediaRouter.get('/list-media', MediaCtlrIns.listMedias); 
MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', upload.single('media'), MediaCtlrIns.addMedia);

export default MediaRouter;
