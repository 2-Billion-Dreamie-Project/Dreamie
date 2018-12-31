import moment from 'moment';
import sharp from 'sharp';
import sizeOf from 'image-size';

import multer from 'multer';
import fs from 'fs';
import MediaModel from '../../models/MediaModel';

import { getFileInfoByName } from '../../helpers';
import { doUploadMedia } from '../../middlewares/doUploadMedia';
import { STT_FILE_ERROR_EXTENSION,  STT_FILE_ERROR_EXCEPTION} from '../../global/statusFileError';

import { MAX_FILE_SIZE } from '../../global/common';

/**
 * @class MediaController
 * @author ChungNQ
 * @version 1.0
 * @since 05/12/2018
 * @description 
 * The MediaController is manage media for Dreamie
 */

export default class MediaController {
  constructor() {
    this.MediaModel = new MediaModel;
    this.addMedia = this.addMedia.bind(this);
  }

  /**
   * @memberof MediaController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Render view list medias
   */
  async listMedias(req, res) {
    res.render('admin/media/list_media');;
  }

  /**
   * @memberof MediaController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Render view add medias
   */
  viewAddMedia(req, res) {
    res.render('admin/media/add_media', {
      csrfToken: req.csrfToken(),
      sttFileErrorExtension: STT_FILE_ERROR_EXTENSION,
      sttFileErrorExcepsion: STT_FILE_ERROR_EXCEPTION,
      maxFileSize: MAX_FILE_SIZE,
    });
  }

  /**
   * @memberof MediaController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response

   */
  async addMedia(req, res) {
    const { file } = req;
    let fileRes = null;

    if (file) {
      let getFileNameAndExt = getFileInfoByName(file.filename);
      let thumbNail = file.destination + getFileNameAndExt.name + '-150x150' + getFileNameAndExt.ext;
      let resize = await sharp(file.path).resize(150, 150)
        .toFile(thumbNail)
          .catch(function(err) {
            console.log(err);
            this.deleteFileError(file.path);
            return undefined;
          });

      if (resize) {
        let dimensions = sizeOf(file.path);

        let { height } = dimensions;
        let { width }  = dimensions;
        let { type }   = dimensions;
        let desc   = '';


        fileRes = await this.MediaModel.addMedia(
          file.originalname,
          file.path,
          thumbNail,
          desc,
          type,
          file.size,
          height,
          width,
        );

        if (!fileRes) {
          this.deleteFileError(file.path);
          this.deleteFileError(thumbNail);
        }

        return res.status(200).json(fileRes);
      }

      return res.status(500).json({mess: STT_FILE_ERROR_EXCEPTION});
    } 
    
    return res.status(500).json({mess: STT_FILE_ERROR_EXCEPTION});
  }

  errorHandleUpload(req, res, next) {
    doUploadMedia(req, res, function (err) {
      if (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json({ mess: err.code });
        } 
    
        if (err === STT_FILE_ERROR_EXTENSION) {
          return res.status(500).json({ mess: STT_FILE_ERROR_EXTENSION });
        }
    
        console.log(err);
        return res.status(500).json({mess: STT_FILE_ERROR_EXCEPTION});
      }

      next();
    });

  }

  deleteFileError(file) {
    try {
      if (typeof file === 'string' && file !== '') {
        fs.unlinkSync(file);
        return true;
      }
      
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

}
