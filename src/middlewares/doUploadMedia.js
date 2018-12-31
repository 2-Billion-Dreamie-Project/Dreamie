import multer from 'multer';
import fs from 'fs';

import { getFileInfoByName } from '../helpers';
import { URL_STORAGE, MAX_FILE_SIZE } from '../global/common';
import { STT_FILE_ERROR_EXTENSION } from '../global/statusFileError';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    let storage = createFolderUpload();
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
      return cb(STT_FILE_ERROR_EXTENSION, false);
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
  limits: {
    fileSize: MAX_FILE_SIZE,
  },
}).single('media');
