
const dao = require('../modules/user/user.dao');

async function resolve(promise) {
    let response = {};
    try{
    let data = await promise;
    if(data) response["data"] = data;
    }
    catch(err){
        response["error"] = err;
    }
    return response;
}


//data().then((data)=>console.log(data));
module.exports = {resolve};