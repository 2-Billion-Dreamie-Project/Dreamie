import PartnerModel from '../../models/PartnerModel';

/**
 * @class HomeController
 * @author Kemmie
 * @version 1.0
 * @since 19/11/2018
 * @description 
 * The HomeController show partner to the client
 */

export default class HomeController {
  constructor() {
    this.PartnerModel = new PartnerModel;
    this.index = this.index.bind(this);
  }

  /**
   * @memberof HomeController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view get partners
   */
  async index(req, res) {
    let partners = await this.PartnerModel.getPartners();
    
    res.render('client/home', {
      csrfToken: req.csrfToken(),
      partners
    });
  }
}
