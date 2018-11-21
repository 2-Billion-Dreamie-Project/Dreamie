import express from 'express';
import PartnerController from '../controllers/PartnerController';

const PartnerRouter = express.Router();
const PartnerCtlrIns = new PartnerController();

PartnerRouter.get('/list-partner', function(req, res) {
  res.render('admin/list_partner');
});

PartnerRouter.get('/custom-partner', PartnerCtlrIns.viewCreatePartner);
PartnerRouter.post('/save-partner', PartnerCtlrIns.savePartner);
PartnerRouter.get('/save-partner/:_id', PartnerCtlrIns.formPartner);

export default PartnerRouter;
