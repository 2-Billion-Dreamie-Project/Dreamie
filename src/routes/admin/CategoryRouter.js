import express from 'express';
import CategoryController from '../../controllers/CategoryController';

const CategoryRouter = express.Router();
const CategoryCtlrIns = new CategoryController();

CategoryRouter.get('/list-category', CategoryCtlrIns.getCategories);

CategoryRouter.get('/custom-category/:_id?', CategoryCtlrIns.formCategory);

CategoryRouter.post('/save-category', CategoryCtlrIns.saveCategory);

CategoryRouter.get('/delete/:_id', CategoryCtlrIns.deleteCategory);

CategoryRouter.get('/api/list-category', CategoryCtlrIns.getApiCategories);

export default CategoryRouter;
