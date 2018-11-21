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
    this.formPartner = this.formPartner.bind(this);
    this.savePartner = this.savePartner.bind(this);
  }

  /**
   * @memberof PartnerController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view create partner
   */
  async formPartner(req, res) {
    let partner = {};
    let _id = typeof req.params._id !== 'undefined' ? req.params._id : '';

    if (_id !== '') {
      partner = await this.PartnerModel.getOnePartner(_id);
    }
  
    if (!partner) {
      res.redirect('/');
    }

    res.render('admin/add_partner', {
      csrfToken: req.csrfToken(),
      _id,
      partner
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
    
    this.PartnerModel.savePartner(name, image);

    // res.redirect('/')
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
