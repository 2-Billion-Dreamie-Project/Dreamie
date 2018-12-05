import SliderModel from '../../models/SliderModel';
import moment from 'moment';
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
    this.getSliders = this.getSliders.bind(this);
    this.deleteSlider = this.deleteSlider.bind(this);
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
    let { messSlider } = req.flash();
    messSlider = messSlider ? messSlider[0]: '';

    if (_id !== '') {
      slider = await this.SliderModel.getOneSlider(_id);
      if (slider && slider.id) {
        req.flash('messUpdateSlider', `Bạn vừa cập nhật slider có số ID ${slider.id} thành công !`);
      }
    }
  
    if (!slider) {
      res.redirect('/');
    }

    res.render('admin/slider/form_slider', {
      csrfToken: req.csrfToken(),
      _id,
      slider,
      messSlider
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
    const {_id, name, image, content } = req.body;
    let slider = {};
    
    if (_id && _id !== '') {
      if (
        (name && name !== '')
        && (image && image !== '')
        && (content && content !== '')
      ) {
        slider = await this.SliderModel.updateSlider(_id, name, image, content);
      } 

      res.redirect('/admin/slider/list-slider');
    } else {
      if (
        (name && name !== '')
        && (image && image !== '')
        && (content && content !== '')
      ) {
        slider = await this.SliderModel.saveSlider(name, image, content);

        if (slider) {
          req.flash('messSlider', 'Bạn đã khởi tạo thành công, mời kiểm tra lại và lưu !');
          res.redirect('/admin/slider/custom-slider/' + slider._id);
        } else {
          res.redirect('/admin/slider/list-slider/');  
        }
      } else {
        res.redirect('/admin/slider/list-slider/');
      }
    }    
  }

  /**
   * @memberof SliderController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view get sliders
   */
  async getSliders(req, res) {
    let sliders = await this.SliderModel.getSliders();
    let { messDelSlider , messUpdateSlider} = req.flash();
    messDelSlider = messDelSlider ? messDelSlider[0]: '';
    messUpdateSlider = messUpdateSlider ? messUpdateSlider[0]: '';

    res.render('admin/slider/list_slider', {
      csrfToken: req.csrfToken(),
      sliders,
      moment,
      messDelSlider,
      messUpdateSlider
    });
  }

  /**
   * @memberof SliderController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view delete slider
   */

  async deleteSlider(req, res) {
    let _id = typeof req.params._id !== 'undefined' ? req.params._id : '';
    let slider = {}
    
    if (_id && _id !== '') {
      slider = await this.SliderModel.deleteSlider({_id: req.params._id});
      if (slider) {
        req.flash('messDelSlider', `Bạn vừa xóa slider có số ID ${slider.id} thành công`);
      }
    }
    
    res.redirect('/admin/slider/list-slider');
  }
}
