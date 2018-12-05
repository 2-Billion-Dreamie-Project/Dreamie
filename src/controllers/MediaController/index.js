// import PartnerModel from '../../models/PartnerModel';
import moment from 'moment';
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
  async addMedia(req, res) {
    res.render('admin/media/add_media');;
  }
}
