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

module.exports = {
  validateCategory,
};
