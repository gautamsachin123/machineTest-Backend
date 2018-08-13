
const _ = require('lodash');
const APIResponse= require('./api.response');
const Exception = require('./exception/base.exception.class');
const exceptions = require('./exception/exception.generator');


const handleSuccess = (res, data) => {
  const responseInstance = new APIResponse();
  responseInstance.success(data);
  res.status(responseInstance.httpStatus).send(responseInstance.toJSON());
};
const handleError = (res, err) => {
  const responseInstance = new APIResponse();
  if (!(err instanceof Exception)) {
    //if (res.req) res.req.logger.error(err);
    responseInstance.failure(exceptions.createCustomException(err));
  } else {
    responseInstance.failure(err);
  }
  res.status(responseInstance.httpStatus).send(responseInstance.toJSON());
};

const wrapRequest = (handlerFn) => {
  const wrappedHandlerFn = async function handlerReq(req, res, next) {
    try {
      const data = await handlerFn(req, res, next);
      handleSuccess(res, data);
    } catch (err) {
      // handle error
      handleError(res, err);
    }
  };
  wrappedHandlerFn._name = handlerFn.name;
  return wrappedHandlerFn;
};

const init = (app) => {
  app.throwError = handleError;
  app.sendSuccess = handleSuccess;
};

const wrapReqHandler = handlers => _.mapValues(handlers, wrapRequest);


module.exports = {
  init, wrapReqHandler, throwError: handleError, sendSuccess: handleSuccess,
};
