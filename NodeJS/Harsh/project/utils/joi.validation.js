const PasswordPrompt = require("inquirer/lib/prompts/password");
const Joi = require("joi");

// ************** validate user ***************
const validateUser = (user) => {
  const joiSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).trim().required(),
    lastName: Joi.string().min(2).max(50).trim().required(),
    password: Joi.string()
      .min(8)
      .max(255)
      .trim()
      .required()
      .pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/),
    emailAddress: Joi.string().max(255).trim().email().required(),
    mobileNumber: Joi.string()
      .trim()
      .required()
      .pattern(/^[6-9]{1}[0-9]{9}$/),
    roles: Joi.number().positive().integer(),
  });
  return joiSchema.validate(user);
};

// ***************** validate user login *********************

const validateUserLogin = (user) => {
  const joiSchema = Joi.object({
    password: Joi.string()
      .min(8)
      .max(255)
      .trim()
      .required()
      .pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/),
    emailAddress: Joi.string().max(255).trim().email().required(),
  });
  return joiSchema.validate(user);
};

// ***************** validate profile *************************

const validateProfile = (item) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    user: Joi.number().positive().integer().required(),
    dateOfBirth: Joi.date(),
    gender: Joi.string().trim(),
  });
  return joiSchema.validate(item);
};

// ******************* validate category ******************

const validateCategory = (product) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(2).max(50).trim().required(),
  });
  return joiSchema.validate(product);
};

// **************** validate subcategory **********************

const validateSubCategory = (product) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(1).max(50).trim().required(),
    category: Joi.number().positive().integer().required(),
  });
  return joiSchema.validate(product);
};

// **************** validate subcategorychild **********************

const validateSubCategoryChild = (product) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(1).max(50).trim().required(),
    subcategory: Joi.number().positive().integer().required(),
  });
  return joiSchema.validate(product);
};

// ****************** validate product *********************

const validateProduct = (product) => {
  const joiSchema = Joi.object({
    productName: Joi.string().min(1).max(255).trim().required(),
    description: Joi.array().items(Joi.string()),
    image: Joi.string(),
    subcategorychild: Joi.number().positive().integer().required(),
    discount: Joi.number().positive().integer(),
    brand: Joi.number().positive().integer().required(),
    price: Joi.number().positive().required(),
  });
  return joiSchema.validate(product);
};

// ********************* validate brand **********************

const validateBrand = (product) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(1).max(50).trim().required(),
  });
  return joiSchema.validate(product);
};

// ********************* validate cartItem *********************

const validateCartItem = (item) => {
  const joiSchema = Joi.object({
    products: Joi.number().positive().integer().required(),
    quantity: Joi.number().positive().integer().required(),
  });
  return joiSchema.validate(item);
};

// ******************** validate cart *************************
const validateCart = (item) => {
  const joiSchema = Joi.object({
    products: Joi.number().positive().integer().required(),
    quantity: Joi.number().positive().integer().required(),
    price: Joi.number().positive().integer().required(),
  });
  return joiSchema.validate(item);
};

// ******************** validate order items *********************

const validateOrderItem = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    order: Joi.number().positive().integer().required(),
    cartItem: Joi.number().positive().integer().required(),
  });
  return joiSchema.validate(product);
};

// ******************** validate order Details *********************

const validateOrderDetail = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    user: Joi.number().positive().integer().required(),
    total: Joi.number().positive().integer().required(),
  });
  return joiSchema.validate(product);
};

// ********************* validate payment **************************

const validatePayment = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    amount: Joi.number().positive().required(),
    status: Joi.boolean().required(),
    orderId: Joi.number().positive().integer().required(),
  });
  return joiSchema.validate(product);
};

module.exports = {
  validateUser,
  validateUserLogin,
  validateProfile,
  validateProduct,
  validateCartItem,
  validateCart,
  validateCategory,
  validateSubCategory,
  validateSubCategoryChild,
  validateOrderItem,
  validateOrderDetail,
  validatePayment,
  validateBrand,
};
