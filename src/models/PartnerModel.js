import { Partner } from '../db';

/**
 * @class UserModel
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
  }

  savePartner(
    name = '', // Đoạn này nghĩa là nếu không có param name hoặc image
    image = '', // thì name hoặc image mặc định là ''
  ) {
    let partner;

    try {
      if (name !== '' && image !== '') {
        // { name, image } tương đương  { name: name, image: image }
        partner = new this.partnerSchema({ name, image });

        partner.save(function (err, partner) {
          if (err) return console.log(err);
          return partner;
        });

        return partner;
      }
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  getOnePartner(_id = '') {
    try {
      if (_id !== '') {
        return(
          this.partnerSchema.findById(_id)
            .catch(function(err) {
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
