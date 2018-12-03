import PartnerModel from '../../models/PartnerModel';
import moment from 'moment';
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
    let { messPartner } = req.flash();
    messPartner = messPartner ? messPartner[0]: '';

    if (_id !== '') {
      partner = await this.PartnerModel.getOnePartner(_id);
      req.flash('messUpdatePartner', `Bạn vừa cập nhật đối tác có số ID ${partner.id} thành công !`);
    }
  
    if (!partner) {
      res.redirect('/');
    }

    res.render('admin/partner/form_partner', {
      csrfToken: req.csrfToken(),
      _id,
      partner,
      messPartner
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
      if (
        (name && name !== '')
        && (image && image !== '')
      ) {
        partner = await this.PartnerModel.updatePartner(_id, name, image);
      } 

      res.redirect('/admin/partner/list-partner');
    } else {
      if (
        (name && name !== '')
        && (image && image !== '')
      ) {
        partner = await this.PartnerModel.savePartner(name, image);

        if (partner) {
          req.flash('messPartner', 'Bạn đã khởi tạo thành công, mời kiểm tra lại và lưu !');
          res.redirect('/admin/partner/custom-partner/' + partner._id);
        } else {
          res.redirect('/admin/partner/list-partner/');  
        }
      } else {
        res.redirect('/admin/partner/list-partner/');
      }
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
    let { messDelPartner , messUpdatePartner} = req.flash();
    messDelPartner = messDelPartner ? messDelPartner[0]: '';
    messUpdatePartner = messUpdatePartner ? messUpdatePartner[0]: '';

    res.render('admin/partner/list_partner', {
      csrfToken: req.csrfToken(),
      partners,
      moment,
      messDelPartner,
      messUpdatePartner
    });
  }

  /**
   * @memberof PartnerController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view delete partner
   */

  async deletePartner(req, res) {
    let _id = typeof req.params._id !== 'undefined' ? req.params._id : '';
    let partner = {}
    
    if (_id && _id !== '') {
      partner = await this.PartnerModel.deletePartner({_id: req.params._id});
      if (partner) {
        req.flash('messDelPartner', `Bạn vừa xóa đối tác có số ID ${partner.id} thành công`);
      }
    }
    
    res.redirect('/admin/partner/list-partner');
  }
}
