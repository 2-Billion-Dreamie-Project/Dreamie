import express from 'express';
import SliderController from '../../controllers/SliderController';

const SliderRouter = express.Router();
const SliderCtlrIns = new SliderController();

SliderRouter.get('/list-slider', SliderCtlrIns.getSliders);

SliderRouter.get('/custom-slider/:_id?', SliderCtlrIns.formSlider);

SliderRouter.post('/save-slider', SliderCtlrIns.saveSlider);

SliderRouter.get('/delete/:_id', SliderCtlrIns.deleteSlider);

export default SliderRouter;
