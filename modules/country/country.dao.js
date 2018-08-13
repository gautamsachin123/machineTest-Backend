const Country = require('./country.model');
const BaseDao = require('../../common/base.dao');

//= ====================================== Class =========================================

class CountryDao extends BaseDao {}

//= ====================================== Exports ================================================

module.exports = new CountryDao(Country);
