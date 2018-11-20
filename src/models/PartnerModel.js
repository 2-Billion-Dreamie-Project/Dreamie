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
  }

  savePartner(
    name = '', // Đoạn này nghĩa là nếu không có param name hoặc image
    image = '', // thì name hoặc image mặc định là ''
  ) {
    console.log({ name, image }) // tương đương console.log({ name: name, image: image })
  }
}
