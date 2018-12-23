import multer from 'multer';
import fs from 'fs';

import { getFileInfoByName } from '../helpers';
import { URL_STORAGE } from '../global/common';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    let storage = createFolderUpload();
    // console.log(storage)
    cb(null, storage);
  },
  filename(req, file, cb) {
    let getFileNameAndExt = getFileInfoByName(file.originalname);
    cb(null, getFileNameAndExt.name + '-' + Date.now() + getFileNameAndExt.ext);
  }
});

function fileFilter(req, file, cb) {
  let ext = getFileInfoByName(file.originalname).ext;
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return cb('Error file ext', false)
  }

  cb(null, true)
};

function createFolderUpload() {
  let dateTime = new Date();
  let year = dateTime.getFullYear();
  let month = dateTime.getMonth() + 1;

  let folder = `${URL_STORAGE}/${year}/${month}/`;
  // Check exist folder 
  if (!fs.existsSync(folder)) {
    // Create folder that not exist
    fs.mkdirSync(folder, { recursive: true, mode: 0o744 });
  }

  return folder;
}

export const doUploadMedia = multer({ 
  storage, 
  fileFilter,
}).single('media');
