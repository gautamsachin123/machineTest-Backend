const { hashSync, compareSync } = require('bcryptjs');
const userDao = require('./user.dao');
const { system } = require('config');
const {resolve} = require('../../common/util');
const  exceptionGenerator = require('../../common/exception/exception.generator');
const jwt = require('jsonwebtoken');

async function createUser(email, password, name) {
    password = hashSync(password, 10);
    let user = await userDao.create({ name, email, password });
    const token = jwt.sign({ email: user.email }, system.JWT_SECRET)
    return { user, token };
}


async function verifyCredentials(email, password) {
    let {data:user,error} = await resolve(userDao.findOne({ email }));
    if(!user) throw exceptionGenerator.userDoesNotExistError(email);
    if(!compareSync(password,user.password)) throw exceptionGenerator.invalidCredentials(email);
    let data = user.toJSON();
    return data;
}

module.exports = { createUser, verifyCredentials };