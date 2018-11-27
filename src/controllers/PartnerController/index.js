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
    this.deletePartner = this.deletePartner.bind(this);
    this.getPartners = this.getPartners.bind(this);
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
  async savePartner(req, res) {
    const {_id, name, image } = req.body;
    let partner = {};
    
    if (_id && _id !== '') {
      partner = await this.PartnerModel.updatePartner(_id, name, image);
      res.redirect('/admin/partner/list-partner');
      return;
    } else {
      partner = await this.PartnerModel.savePartner(name, image);
      res.redirect('/admin/partner/custom-partner/' + partner._id);
      return;
    }    
  }

  /**
   * @memberof PartnerController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view get partners
   */
  async getPartners(req, res) {
    let partners = await this.PartnerModel.getPartners();
    
    res.render('admin/list_partner', {
      csrfToken: req.csrfToken(),
      partners
    });
  }

  /**
   * @memberof PartnerController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view delete partner
   */

  deletePartner(req, res) {
    let _id = typeof req.params._id !== 'undefined' ? req.params._id : '';
    
    if (_id && _id !== '') {
      this.PartnerModel.deletePartner({_id: req.params._id});
    }
    res.redirect('/admin/partner/list-partner');
  }
}
