const PasswordPrompt = require("inquirer/lib/prompts/password");
const Joi = require("joi");

// validate user
const validateUser = (user) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    userName: Joi.string().min(1).max(50).required(),
    password: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(1).max(255).required().email(),
    phoneNumber: Joi.number().positive().required(),
    roles: Joi.number().required(),
  });
  return joiSchema.validate(user);
};

// validate user login

const validateUserLogin = (user) => {
  const joiSchema = Joi.object({
    password: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(1).max(255).required().email(),
  });
  return joiSchema.validate(user);
};

// validate product

const validateProduct = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    productName: Joi.string().min(1).max(255).required(),
    description: Joi.string(),
    subcategory: Joi.number().required(),
    price: Joi.number().positive().required(),
  });
  return joiSchema.validate(product);
};

// validate cartItem

const validateCartItem = (item) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    products: Joi.number().required(),
    quantity: Joi.number().required(),
  });
  return joiSchema.validate(item);
};

// validate category

const validateCategory = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    name: Joi.string().min(1).max(50).required(),
  });
  return joiSchema.validate(product);
};

// validate subcategory

const validateSubCategory = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    name: Joi.string().min(1).max(50).required(),
    category: Joi.number().required(),
  });
  return joiSchema.validate(product);
};

// validate order

const validateOrder = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    users: Joi.number().required(),
    cart: Joi.number().required(),
  });
  return joiSchema.validate(product);
};

// validate payment

const validatePayment = (product) => {
  const joiSchema = Joi.object({
    _id: Joi.number().required(),
    amount: Joi.number().positive().required(),
    status: Joi.boolean().required(),
    orderId: Joi.number().required(),
  });
  return joiSchema.validate(product);
};

module.exports = {
  validateUser,
  validateUserLogin,
  validateProduct,
  validateCartItem,
  validateCategory,
  validateSubCategory,
  validateOrder,
  validatePayment,
};
