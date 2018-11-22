import PartnerModel from '../../models/PartnerModel';
import { Partner } from '../../db';

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
    this.partnerSchema = Partner;
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
    const {_id, name, image } = req.body;
    let partner = {};
    
    // this.PartnerModel.savePartner(_id, name, image);
    if (_id && _id !== '') {
      partner = this.PartnerModel.savePartner(name, image);
    } else {
      partner = this.PartnerModel.savePartner(name, image);

    }

    console.log(partner)

    res.redirect('/admin/partner/custom-partner/' + partner._id);
  }

  getPartners(req, res) {
    try {
      return Partner.find().then(function(partners) {
        res.render('admin/list_partner', {
          partners: partners
        });
      });
    } catch(err) {
      console.log(err);
      return false;
    }
  }
}
