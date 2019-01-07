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

    this.getMedia = this.getMedia.bind(this);
    this.updateMedia = this.updateMedia.bind(this);
    this.deleteMedia = this.deleteMedia.bind(this);
  }

  /**
   * @memberof UserModel#
   * @returns {Object} Return promise object medias
   */
  listMedias({ query = {}, options = {} }) {
    try {
      return (
        this.mediaSchema.paginate(query, options)
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
   * @returns {Object} Return promise object medias
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

  /**
   * @memberof UserModel#
   * @param {ObjectId} _id - this param is required 
   * @returns {Object} Return promise object media
   */
  getMedia(_id = '') {
    try {
      return(
        this.mediaSchema.findById(_id)
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
   * @param {ObjectId} _id - this param is required 
   * @param {ObjectId} name - this param is required 
   * @param {ObjectId} desc 
   * @returns {Object} Return promise object media
   */
  updateMedia(_id = '', name = '', desc = '',) {
    try {
      if (_id !== '' && name !== '') {
        return(
          this.mediaSchema
          .findOneAndUpdate(
            { _id }, 
            { 
              $set: { name, desc },
            },
            {
              new: true
            },
          ).catch(function(err) {
            console.log(err);
            return undefined;
          })
        );
      }
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }


  /**
   * @memberof UserModel#
   * @param {ObjectId} _id - this param is required 
   * @returns {Object} Return promise object media
   */
  deleteMedia(_id = '') {
    try {
      if (_id !== '') {
        return(
          this.mediaSchema
          .findOneAndDelete({ _id }).catch(function(err) {
            console.log(err);
            return undefined;
          })
        );
      }
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

}
