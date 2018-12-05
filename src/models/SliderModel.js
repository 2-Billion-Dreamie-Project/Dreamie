import {
  Slider
} from '../db';

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
    this.sliderSchema = Slider;
    this.getOneSlider = this.getOneSlider.bind(this);
    this.saveSlider = this.saveSlider.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
    this.deleteSlider = this.deleteSlider.bind(this);
    this.getSliders = this.getSliders.bind(this);
  }

  /**
   * @memberof SliderModel#
   * @param {ID} _id - this param is required
   * @returns {Object} Return slider is object type
   */
  getOneSlider(_id = '') {
    try {
      if (_id !== '') {
        return (
          this.sliderSchema.findById(_id)
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

  saveSlider(
    name = '',
    image = '',
    content = '',
  ) {
    let slider;

    try {
      if (name !== '' && image !== '' && content !== '') {
        slider = new this.sliderSchema({
          name,
          image,
          content
        });

        slider.save(function (err, slider) {
          if (err) return console.log(err);
          return slider;
        });

        return slider;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /**
   * @memberof SliderModel#
   * @param {ID} _id - this param is required
   * @param {String} name - this param is required
   * @param {String} image - this param is required
   * @param {String} content - this param is required
   * @returns {Object} Return slider is object type
   */
  updateSlider(
    _id = '',
    name = '',
    image = '',
    content = '',
  ) {
    try {
      if (_id && _id !== '') {
        return (
          this.sliderSchema
          .updateOne({
            _id
          }, {
            $set: {
              name,
              image,
              content
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
   * @memberof SliderModel#
   * @returns {Array} Return sliders is an array type
   */
  getSliders() {
    try {
      return (
        this.sliderSchema.find({})
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

  deleteSlider(_id = '') {
    try {
      if (_id !== '') {
        return(
          this.sliderSchema.findOneAndRemove({ _id })
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
