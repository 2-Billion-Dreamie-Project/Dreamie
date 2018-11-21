import PartnerModel from '../../models/PartnerModel';

/**
 * @class PartnerController
 * @author Kemmie
 * @version 1.0
 * @since 19/11/2018
 * @description 
 * The PartnerController show partner to the client
 */

export default class PartnerController {
  constructor() {
    this.PartnerModel = new PartnerModel;
    this.savePartner = this.savePartner.bind(this);
  }

  /**
   * @memberof PartnerController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view create partner
   */
  formPartner(req, res) {
    res.render('admin/add_partner', {
      csrfToken: req.csrfToken(),
    });
    
  }

  /**
   * @memberof PartnerController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Save and Render Partner
   * @description 
   * If error show message error 
   */
  savePartner(req, res) {
    // Đoạn này tương đương: 
    // name = req.body.name
    // image = req.body.image
    
    const { name, image } = req.body;
    
    let partner = this.PartnerModel.savePartner(name, image);

    res.redirect('/')
  }

  getPartners() {
    try {
      return this.partnerSchema.find({});
    } catch(err) {
      console.log(err);
      return false;
    }
  }
}
