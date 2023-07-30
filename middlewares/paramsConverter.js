// paramToJsonMiddleware.js
const logger = require('../config/logger');
function convertParamsToJson(req, res, next) {
    const params = req.params;
    const convertedParams = JSON.parse(JSON.stringify(params));
    req.parsedParams = convertedParams;
    logger.info(`parsedParams : ${req.parsedParams}`)
    next();
  }
  
  module.exports = convertParamsToJson;
  