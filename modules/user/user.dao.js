const User = require('./user.model');
const BaseDao = require('../../common/base.dao');

//= ====================================== Class =========================================

class UserDao extends BaseDao {}

//= ====================================== Exports ================================================

module.exports = new UserDao(User);
