class BaseException {
    constructor(errorCode, msg, httpCode, errObject = {}) {
        this.errorCode = errorCode;
        this.msg = msg;
        this.httpCode= httpCode || 500;
        this.errorObject = errObject;
    }
}
module.exports = BaseException;