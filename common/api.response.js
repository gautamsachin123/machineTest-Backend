const _ = require('lodash');

//= ====================================== Class =========================================

class APIResponse {
  constructor() {
    this.status = 1;
    this.httpStatus = 200;
  }

  success(data) {
    this.result = data;
  }

  failure(err) {
    this.status = 0;
    this.httpStatus = err.httpStatus || 400;
    delete err.httpStatus;
    this.error = err;
  }

  toJSON() {
    const response = _.clone(this);
    delete response.httpStatus;
    return response;
  }
}

//= ====================================== Exports ================================================

module.exports = APIResponse;

