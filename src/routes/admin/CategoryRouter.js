import express from 'express';
import CategoryController from '../../controllers/CategoryController';

const CategoryRouter = express.Router();
const CategoryCtlrIns = new CategoryController();

CategoryRouter.get('/list-category', function(req, res) {
  res.render('admin/category/list_category')
});

CategoryRouter.get('/custom-category/:_id?', function(req, res) {
  res.render('admin/category/form_category')
});

// CategoryRouter.post('/save-slider', CategoryCtlrIns.saveCategory);

// CategoryRouter.get('/delete/:_id', CategoryCtlrIns.deleteCategory);

export default CategoryRouter;
