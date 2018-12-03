import express from 'express';
import SliderController from '../../controllers/SliderController';

const SliderRouter = express.Router();
const SliderCtlrIns = new SliderController();

SliderRouter.get('/list-slider', function(req, res) {
  res.render('admin/slider/list_slider')
});

SliderRouter.get('/custom-slider/:_id?', SliderCtlrIns.formSlider);

SliderRouter.post('/save-slider', SliderCtlrIns.saveSlider);

export default SliderRouter;
