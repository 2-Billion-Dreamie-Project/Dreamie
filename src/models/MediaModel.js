import { Media } from '../db';

/**
 * @class MediaModel
 * @author ChungNQ
 * @version 1.0
 * @since 20/11/2018
 * @requires Media
 * @description 
 * The MediaModel handle data by media
 */

export default class MediaModel {
  constructor() {
    this.mediaSchema = Media;
    this.addMedia = this.addMedia.bind(this);
    this.listMedias = this.listMedias.bind(this);
  }

  /**
   * @memberof UserModel#
   * @returns {Object} Return promise object medias
   */
  listMedias() {
    try {
      return (
        this.mediaSchema.find({})
          .catch(function(err) {
            console.log(err);
            return undefined;
          })
      );
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  /**
   * @memberof UserModel#
   * @param {String} name - this param is required
   * @param {String} url - this param is required
   * @param {String} thumbNail - this param is required 
   * @param {String} desc - this param is required 
   * @param {String} ext - this param is required 
   * @param {Number} size - this param is required 
   * @param {Number} height - this param is required 
   * @param {Number} width - this param is required 
   * @param {Boolean} mainMode - this param is required 
   * @returns {Object} Return promise object media
   */
  addMedia(
    name = '',
    url = '',
    thumbNail = '',
    desc = '',
    ext = '',
    size = 0,
    height = 0,
    width = 0,
    mainMode = false,
  ) {
    try {
      if (name !== '' && url !== '' && thumbNail !== '') {
        return (
          this.mediaSchema.create({
            name,
            url,
            thumbNail,
            desc,
            ext,
            size,
            height,
            width,
            mainMode,
          }).catch(function(err) {
            console.log(err);
            return undefined;
          })
  
        );  
      }
      
      return undefined;
    } catch (err) {
      console.log(err);
      return undefined;
    }

  }

}
