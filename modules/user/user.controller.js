const { createUser } = require('./user.service');
const { sendSuccess, throwError } = require('../../common/response.handler');

async function create(req, res) {
    try {
        let { email, password, name } = req.body;
        let data = await createUser(email, password, name);
        sendSuccess(res, data);
    }
    catch (err) {
        console.log(err);
       throwError(res,err);
    }

}

async function login(req, res) {
    try{
    let { user,token } = req;
    return sendSuccess(res, { user,token });
    }
    catch(err){
        console.log(err);
        throwError(res,err);
    }
}


module.exports = { create, login };


