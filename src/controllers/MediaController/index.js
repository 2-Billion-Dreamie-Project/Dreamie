// import PartnerModel from '../../models/PartnerModel';
import moment from 'moment';
import sharp from 'sharp';

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
    // this.PartnerModel = new PartnerModel;
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
    });
  }

  /**
   * @memberof MediaController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response

   */
  addMedia(req, res) {
    console.log(req.file);
    sharp(req.file.path).resize(4460, 2973).toFile('src/storage/thumbnail/' + 'thumb-' + req.file.filename, function(err) {
      if (err) {
          console.error('sharp>>>', err)
      }
      console.log('ok okoko')
    })

    res.json(req.file);
  }
}
