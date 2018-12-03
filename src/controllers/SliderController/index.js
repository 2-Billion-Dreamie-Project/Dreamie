import SliderModel from '../../models/SliderModel';
/**
 * @class SliderController
 * @author Kemmie
 * @version 1.0
 * @since 03/12/2018
 * @description 
 * The SliderController show slider to the client
 */

export default class SliderController {
  constructor() {
    this.SliderModel = new SliderModel;
    this.formSlider = this.formSlider.bind(this);
    this.saveSlider = this.saveSlider.bind(this);
  }

  /**
   * @memberof SliderController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view create slider
   */
  async formSlider(req, res) {
    let slider = {};
    let _id = typeof req.params._id !== 'undefined' ? req.params._id : '';

    if (_id !== '') {
      slider = await this.SliderModel.getOneSlider(_id);
    }
  
    if (!slider) {
      res.redirect('/');
    }

    res.render('admin/slider/form_slider', {
      csrfToken: req.csrfToken(),
      _id,
      slider,
    });
  }

  /**
   * @memberof SliderController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Save and Render Slider
   * @description 
   * If error show message error 
   */
  async saveSlider(req, res) {
    const {_id, name, image } = req.body;
    let slider = {};
    
    if (_id && _id !== '') {
      if (
        (name && name !== '')
        && (image && image !== '')
      ) {
        slider = await this.SliderModel.updateSlider(_id, name, image);
      } 

      res.redirect('/admin/slider/list-slider');
    } else {
      if (
        (name && name !== '')
        && (image && image !== '')
      ) {
        slider = await this.SliderModel.saveSlider(name, image);

        if (slider) {
          res.redirect('/admin/slider/custom-slider/' + slider._id);
        } else {
          res.redirect('/admin/slider/list-slider/');  
        }
      } else {
        res.redirect('/admin/slider/list-slider/');
      }
    }    
  }

}
