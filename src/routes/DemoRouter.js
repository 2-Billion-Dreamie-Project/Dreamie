import express from 'express';

const DemoRouter   = express.Router();

DemoRouter.get('/home', function(req, res) {
  res.render('client/home')
});

export default DemoRouter;
