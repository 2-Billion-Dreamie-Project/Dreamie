import {
  Partner
} from '../db';

/**
 * @class PartnerModel
 * @author Kemmie
 * @version 1.0
 * @since 20/11/2018
 * @requires Partner
 * @description 
 * The PartnerModel handle data by partner
 */
export default class PartnerModel {
  constructor() {
    // Gán thuộc tính this.partnerSchema = Partner(db)
    this.partnerSchema = Partner;
    this.savePartner = this.savePartner.bind(this);
    this.getOnePartner = this.getOnePartner.bind(this);
    this.updatePartner = this.updatePartner.bind(this);
    this.deletePartner = this.deletePartner.bind(this);
    this.getPartners = this.getPartners.bind(this);
  }

  /**
   * @memberof PartnerModel#
   * @param {String} name - this param is required
   * @param {String} image - this param is required
   * @returns {Object} Return partner is object type
   */
  savePartner(
    name = '', // Đoạn này nghĩa là nếu không có param name hoặc image
    image = '', // thì name hoặc image mặc định là ''
  ) {
    let partner;

    try {
      if (name !== '' && image !== '') {
        partner = new this.partnerSchema({
          name,
          image
        });

        partner.save(function (err, partner) {
          if (err) return console.log(err);
          return partner;
        });

        return partner;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /**
   * @memberof PartnerModel#
   * @param {ID} _id - this param is required
   * @param {String} name - this param is required
   * @param {String} image - this param is required
   * @returns {Object} Return partner is object type
   */
  updatePartner(
    _id = '',
    name = '',
    image = '',
  ) {
    try {
      if (_id && _id !== '') {
        return (
          this.partnerSchema
          .updateOne({
            _id
          }, {
            $set: {
              name,
              image
            }
          }, {
            new: true
          })
          .catch(function (err) {
            console.log(err);
            return undefined
          })
        );
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /**
   * @memberof PartnerModel#
   * @param {ID} _id - this param is required
   * @returns {Object} Return partner is object type
   */
  getOnePartner(_id = '') {
    try {
      if (_id !== '') {
        return (
          this.partnerSchema.findById(_id)
          .catch(function (err) {
            console.log(err);
            return undefined
          })
        );
      }

      return false;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  /**
   * @memberof PartnerModel#
   * @returns {Array} Return partners is an array type
   */
  getPartners() {
    try {
      return (
        this.partnerSchema.find({})
        .catch(function (err) {
          console.log(err);
          return undefined
        })
      );
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  /**
   * @memberof PartnerModel#
   * @param {ID} _id - this param is required
   * @todo - Redirect to list-partner
   */
  deletePartner(_id = '') {
    try {
      if (_id !== '') {
        return (
          this.partnerSchema.findOneAndRemove({
            _id
          })
          .catch(function (err) {
            console.log(err);
            return undefined
          })
        );
      }

      return false;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
