const app = require('express')();
const db = require('./db');
const { urlencoded, json } = require('body-parser');
const {passport}  = require('../modules/authentication');
const cors = require('cors')

app.use(cors());
app.use(urlencoded({ extended: false })).use(json());
app.use(passport.initialize());
const countryRouter = require('../modules/country/country.router');
const authentication = require('../modules/authentication/auth');
const userRouter = require('../modules/user/user.router');

app.use('/country', countryRouter);
// app.use('/authentication', authentication);

app.use('/user', userRouter);

module.exports = app;