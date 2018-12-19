import CategoryModel from '../../models/CategoryModel';
import moment from 'moment';
/**
 * @class CategoryController
 * @author Kemmie
 * @version 1.0
 * @since 03/12/2018
 * @description 
 * The CategoryController show category to the client
 */

export default class CategoryController {
  constructor() {
    this.CategoryModel = new CategoryModel;
    this.formCategory = this.formCategory.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  /**
   * @memberof CategoryController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view create category
   */
  async formCategory(req, res) {
    let category = {};
    let _id = typeof req.params._id !== 'undefined' ? req.params._id : '';
    let { messCategory } = req.flash();

    let getListCategoryParent = await this.CategoryModel.getListCategoryParent();

    messCategory = messCategory ? messCategory[0]: '';

    if (_id !== '') {
      category = await this.CategoryModel.getOneCategory(_id);
      if (category && category.id) {
        req.flash('messUpdateCategory', `Bạn vừa cập nhật danh mục có số ID ${category.id} thành công !`);
      }
    }
  
    if (!category) {
      res.redirect('/');
    }

    res.render('admin/category/form_category', {
      csrfToken: req.csrfToken(),
      _id,
      category,
      getListCategoryParent,
      messCategory
    });
  }

  /**
   * @memberof CategoryController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @todo Save and Render Category
   * @description 
   * If error show message error 
   */
  async saveCategory(req, res) {
    const {_id, name, image, categoryParentId } = req.body;
    let parentId = (categoryParentId && categoryParentId !=='') ? categoryParentId : '';
    let isParent = parentId !== '' ? false : true;
    let category = {};
    
    if (_id && _id !== '') {
      if (
        (name && name !== '')
        && (image && image !== '')
      ) {
        category = await this.CategoryModel.updateCategory(_id, name, image, parentId, isParent);
      } 

      res.redirect('/admin/category/list-category');
    } else {
      if (
        (name && name !== '')
        && (image && image !== '')
      ) {
        category = await this.CategoryModel.saveCategory(name, image, parentId, isParent);
        if (category) {
          req.flash('messCategory', 'Bạn đã khởi tạo thành công, mời kiểm tra lại và lưu !');
          res.redirect('/admin/category/custom-category/' + category._id);
        } else {
          res.redirect('/admin/category/list-category/');  
        }
      } else {
        res.redirect('/admin/category/list-category/');
      }
    }    
  }

  /**
   * @memberof CategoryController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view get categories
   */
  async getCategories(req, res) {
    let categories = await this.CategoryModel.getCategories();
    let { messDelCategory , messUpdateCategory} = req.flash();

    messDelCategory = messDelCategory ? messDelCategory[0]: '';
    messUpdateCategory = messUpdateCategory ? messUpdateCategory[0]: '';

    res.render('admin/category/list_category', {
      csrfToken: req.csrfToken(),
      categories,
      moment,
      messDelCategory,
      messUpdateCategory
    });
  }

  /**
   * @memberof CategoryController#
   * @argument req This is the first paramter to get request
   * @argument res  This is the second parameter to get response
   * @requires {@link https://github.com/expressjs/csurf|csrfToken}
   * @todo Render view delete category
   */

  async deleteCategory(req, res) {
    let _id = typeof req.params._id !== 'undefined' ? req.params._id : '';
    let category = {}
    
    if (_id && _id !== '') {
      category = await this.CategoryModel.deleteCategory(_id);
      if (category) {
        req.flash('messDelCategory', `Bạn vừa xóa danh mục có số ID ${category.id} thành công`);
      }
    }
    
    res.redirect('/admin/category/list-category');
  }
}
