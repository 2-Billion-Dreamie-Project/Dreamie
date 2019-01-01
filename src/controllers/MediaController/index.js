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
    this.getMedias = this.getMedias.bind(this);
  }

  /**
   * @memberof MediaController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Render view list medias
   */
  listMedias(req, res) {
    res.render('admin/media/list_media', {
      csrfToken: req.csrfToken(),
      moment,
    });
  }

  /**
   * @memberof MediaController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @return {Object} Return list medias
   */

  async getMedias(req, res) {
    console.log(req.body)
    let medias = await this.MediaModel.listMedias(req.body);
    let resMedias = {
      draw: req.body.draw,
      recordsTotal: 124,
      recordsFiltered: 124,
      data: medias,
    }
    return res.status(200).json(resMedias); 
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
   * @todo Generate thumbnail and save detail of file to database
   * @returns {Object}
   */
  async addMedia(req, res) {
    const { file } = req;
    let fileRes = null;

    if (file) {
      // Generate thumbnail
      let getFileNameAndExt = getFileInfoByName(file.filename);
      let thumbNail = file.destination + getFileNameAndExt.name + '-150x150' + getFileNameAndExt.ext;
      let resize = await sharp(file.path).resize(150, 150)
        .toFile(thumbNail)
          .catch(function(err) {
            console.log(err);
            // Upload has error, remove file 
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

        // Save info media was failed, remove media and thumbnail
        if (!fileRes) {
          this.deleteFileError(file.path);
          this.deleteFileError(thumbNail);
        }

        return res.status(200).json(fileRes);
      }

      // Return message error if file has does not generate thumbnail
      return res.status(500).json({mess: STT_FILE_ERROR_EXCEPTION});
    } 

    // Return message if file does not exist
    return res.status(500).json({mess: STT_FILE_ERROR_EXCEPTION});
  }
  
  /**
   * @memberof MediaController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @argument next  This is the second parameter to get response
   * @todo Error handle when file is uploading
   */
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

  /**
   * @memberof MediaController#
   * @param {String} file - param is url - path of file
   * @todo Remove file by param
   */
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
