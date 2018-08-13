const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../authentication/auth');
const {importData, getCountryData, saveCountry, updateCountry, deleteCoutry } = (require('./country.controller'));

router.get('/import',importData);
router.get('/list/:id?',getCountryData);
router.post('/create',saveCountry);
router.put('/update/:id',updateCountry);
router.delete('/delete/:id',deleteCoutry);


module.exports = router;
        