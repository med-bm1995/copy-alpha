import { body, validationResult } from "express-validator";

export const registerRules = () => [
  body("name", "Name is required").notEmpty(),
  body("lastName", "Last name is required").notEmpty(),
  body("email", "email is required").isEmail(),
  body("password", "Password must contain 6 characters").isLength({
    min: 6,
    max: 20,
  }),
];

export const loginRules = () => [
  body("email", "email is required").isEmail(),
  body("password", "Password must contain 6 characters").isLength({
    min: 6,
    max: 20,
  }),
];

export const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};
