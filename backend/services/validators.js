const Joi = require("joi");

const categorySchema = Joi.object({
  Name: Joi.string().min(2).max(500).required(),
  Icon: Joi.string().max(1000).required(),
  Description: Joi.string().max(1000).required(),
});

const videoSchema = Joi.object({
  Name: Joi.string().min(2).max(500).required(),
  id_Category: Joi.number().min(1).max(10).required(),
  Url: Joi.string().max(1000).required(),
  Description: Joi.string().max(1000).required(),
  Premium: Joi.number().min(0).required(),
});

const validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

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
  validateVideo,
};
