import { Slider } from '../db';

/**
 * @class SliderModel
 * @author Kemmie
 * @version 1.0
 * @since 20/11/2018
 * @requires Slider
 * @description 
 * The SliderModel handle data by slider
 */
export default class SliderModel {
  constructor() {
    this.SliderSchema = Slider;
    this.getOneSlider = this.getOneSlider.bind(this);
    this.saveSlider = this.saveSlider.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
  }

  /**
   * @memberof SliderModel#
   * @param {ID} _id - this param is required
   * @returns {Object} Return slider is object type
  */
  getOneSlider(_id = '') {
    try {
      if (_id !== '') {
        return(
          this.sliderSchema.findById(_id)
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

  saveSlider(
    name = '', 
    image = '',
  ) {
    let slider;

    try {
      if (name !== '' && image !== '') {
        slider = new this.SliderSchema({ name, image });

        slider.save(function (err, slider) {
          if (err) return console.log(err);
          return slider;
        });

        return slider;
      } 
    } catch(err) {
      console.log(err);
      return false;
    }
  }

    /**
   * @memberof SliderModel#
   * @param {ID} _id - this param is required
   * @param {String} name - this param is required
   * @param {String} image - this param is required
   * @returns {Object} Return slider is object type
   */
  updateSlider(
    _id = '',
    name = '',
    image = '',
  ) {    
    try {
      if (_id && _id !== '') {
        return(
          this.sliderSchema
            .updateOne({_id}, {$set:{ name, image }}, {new: true})
            .catch(function(err) {
              console.log(err);
              return undefined
            })
        );
      }
    } catch(err) {
      console.log(err);
      return false;
    }
  }
}
