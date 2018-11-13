import express from 'express';

const DemoRouter   = express.Router();

DemoRouter.get('/home', function(req, res) {
  res.render('client/home')
});

DemoRouter.get('/product', function(req, res) {
  res.render('client/product');
});

DemoRouter.get('/product_2', function(req, res) {
  res.render('client/product_2');
});

DemoRouter.get('/product_detail', function(req, res) {
  res.render('client/product_detail');
});

DemoRouter.get('/news', function(req, res) {
  res.render('client/news');
});

DemoRouter.get('/news_detail', function(req, res) {
  res.render('client/news_detail');
});

DemoRouter.get('/about_us', function(req, res) {
  res.render('client/about_us');
});

DemoRouter.get('/contact', function(req, res) {
  res.render('client/contact');
});

DemoRouter.get('/cart', function(req, res) {
  res.render('client/cart');
});

DemoRouter.get('/pay', function(req, res) {
  res.render('client/pay');
});

DemoRouter.get('/wishlist', function(req, res) {
  res.render('client/wishlist');
});

export default DemoRouter;
