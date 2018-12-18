import { Category } from '../db';

/**
 * @class CategoryModel
 * @author Kemmie
 * @version 1.0
 * @since 20/11/2018
 * @requires Category
 * @description 
 * The CategoryModel handle data by category
 */
export default class CategoryModel {
  constructor() {
    this.categorySchema = Category;
    this.getOneCategory = this.getOneCategory.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  /**
   * @memberof CategoryModel#
   * @param {ID} _id - this param is required
   * @returns {Object} Return category is object type
   */
  getOneCategory(_id = '') {
    try {
      if (_id !== '') {
        return (
          this.categorySchema.findById(_id).populate({ 
            path: 'parentId', 
            model: 'Category',
            match: { isParent: true}
          })
            .catch(function (err) {
              console.log(err);
              return undefined
            })
        );
      }

      return false;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  saveCategory(
    name = '',
    image = '',
    parentId = '',
    isParent = true,
  ) {
    let category;

    try {
      if (name !== '' && image !== '') {
        category = new this.categorySchema({
          name,
          image,
          isParent
        });

        category.parentId = parentId !== '' ? parentId : category._id;

        category.save(function (err, category) {
          if (err) return console.log(err);
          return category;
        });

        return category;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /**
   * @memberof CategoryModel#
   * @param {ID} _id - this param is required
   * @param {String} name - this param is required
   * @param {String} image - this param is required
   * @returns {Object} Return category is object type
   */
  updateCategory(
    _id = '',
    name = '',
    image = '',
    parentId = '',
    isParent = true,
  ) {
    try {
      if (_id && _id !== '') {
        parentId = parentId !== '' ? parentId : _id;
        
        return (
          this.categorySchema
            .findOneAndUpdate({
              _id
            }, {
              $set: {
                name,
                image,
                parentId,
                isParent,
              }
            }, {
              new: true
            })
            .catch(function (err) {
              console.log(err);
              return undefined
            })
        );
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /**
   * @memberof CategoryModel#
   * @returns {Array} Return categorys is an array type
   */
  getCategories() {
    try {
      return (
        this.categorySchema.find({}).populate({ 
          path: 'parentId', 
          model: 'Category',
          match: { isParent: true}
        })
          .catch(function (err) {
            console.log(err);
            return undefined
          })
      );
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  getListCategoryParent() {
    try {
      return (
        this.categorySchema.find({ isParent: true })
        .catch(function (err) {
          console.log(err);
          return undefined
        })
      );
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  getHomeCategories() {
    try {
      return (
        this.categorySchema
          .find({ isParent: true })
            .limit(6)
            .sort({id: -1})
          .populate({ 
            path: 'subCategories', 
            model: 'Category',
            match: { isParent: false}
          })
            .catch(function (err) {
              console.log(err);
              return undefined
            })
      );
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  deleteCategory(_id = '') {
    try {
      if (_id !== '') {
        return(
          this.categorySchema.findOneAndRemove({ _id })
            .catch(function(err) {
              console.log(err);
              return undefined
            })
        );
      }
  
      return false;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  UpdateChildParentCategory(parentId = '', childId = '') {
    try {
      if (parentId !== '' && childId !== '') {
        return(
          this.categorySchema
            .findOneAndUpdate({ _id: parentId }, { $push: {childCategoryIds: childId} }, {
              new: true
            })
            .catch(function (err) {
              console.log(err);
              return undefined
            })
        );
      }
  
      return false;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}
