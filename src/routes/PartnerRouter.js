import express from 'express';
import PartnerController from '../controllers/PartnerController';

const PartnerRouter = express.Router();
const PartnerCtlrIns = new PartnerController();

PartnerRouter.get('/list-partner', PartnerCtlrIns.getPartners);

PartnerRouter.get('/custom-partner/:_id?', PartnerCtlrIns.formPartner);
PartnerRouter.post('/save-partner', PartnerCtlrIns.savePartner);

export default PartnerRouter;
