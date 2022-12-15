const Joi = require("joi");

const categorySchema = Joi.object({
  Name: Joi.string().max(500).required().min(2),
  Icon: Joi.string().max(1000),
  Description: Joi.string().max(1000),
});

const validateCategory = (req, res, next) => {
  const { Name, Icon, Description } = req.body;

  const { error } = categorySchema.validate(
    { Name, Icon, Description },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateCategory,
};
