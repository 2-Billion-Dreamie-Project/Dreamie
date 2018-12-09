import multer from 'multer';
import { URL_STORAGES } from '../global/common';

const upload = multer({ dest: URL_STORAGES });

export const uploadFileMedia = function(req, res, next) {
  const doUpload = upload.single('media');

  console.log(doUpload);
}
