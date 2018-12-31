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
  }

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
