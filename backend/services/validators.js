const Joi = require("joi");

const categorySchema = Joi.object({
  Name: Joi.string().min(2).max(500).required(),
  Icon: Joi.string().max(1000).required(),
  Description: Joi.string().max(1000).required(),
});

const validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};


const checkUser = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    }),
    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.sendStatus(401);

const videoSchema = Joi.object({
  Name: Joi.string().min(2).max(500).required(),
  id_Category: Joi.number().min(1).required(),
  Url: Joi.string().max(1000).required(),
  Description: Joi.string().max(1000).required(),
  Premium: Joi.number().max(2).required(),
});

const validateVideo = (req, res, next) => {
  const { error } = videoSchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateCategory,
  checkUser,
  validateVideo,
};
