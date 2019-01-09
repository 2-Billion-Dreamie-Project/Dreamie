import express from 'express';
import MediaController from '../../controllers/MediaController';
import { body, param } from 'express-validator/check';

const MediaRouter   = express.Router();
const MediaCtlrIns  = new MediaController();

const validateDelete = [ 
  param('_id', 'Bạn gặp lỗi trong lúc xoá')
    .not()
      .isEmpty()
      .trim() 
];
const validateUpdate = [ 
  body('name', 'Tên media không được để trống')
    .not()
      .isEmpty()
      .trim(),
  body('_id', 'Bạn gặp lỗi trong lúc cập nhật')
    .not()
      .isEmpty()
      .trim() 
];

MediaRouter.get('/list-medias', MediaCtlrIns.listMedias); 
MediaRouter.post('/get-medias', MediaCtlrIns.getMedias); 

MediaRouter.get('/add-media', MediaCtlrIns.viewAddMedia);
MediaRouter.post('/add-media', MediaCtlrIns.errorHandleUpload, MediaCtlrIns.addMedia);

MediaRouter.get('/detail-media/:_id', MediaCtlrIns.viewDetailMedia);
MediaRouter.post('/update-media/', validateUpdate, MediaCtlrIns.updateMedia);

MediaRouter.get('/delete-media/:_id', validateDelete, MediaCtlrIns.deleteMedia);

export default MediaRouter;
