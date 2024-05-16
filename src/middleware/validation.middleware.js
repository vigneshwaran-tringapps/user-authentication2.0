const { plainToInstance } = require('class-transformer');
const { validateOrReject } = require('class-validator');

exports.validateBody = (dtoClass) => {
  return async (req, res, next) => {
    try {
      const dtoObject = plainToInstance(dtoClass, req.body);
      await validateOrReject(dtoObject);
      next();
    } catch (errors) {
      res.status(401).json(errors.map(error => error.constraints));
    }
  };
};
