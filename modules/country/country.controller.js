const { importDataWebService , getCountry, saveCountryDetail,   updateCountryDetail, deleteCoutryDetails} = require('./country.service');
const { sendSuccess, throwError } = require('../../common/response.handler');


async function importData(req, res) {
    try {
        let data = await importDataWebService();
        return sendSuccess(res, data)
    }
    catch (err) {
        console.log(err);
        return throwError(res, err);
    }

};

async function getCountryData(req,res) {
    try{
    let {limit, skip,name} = req.query;
    let {id} =req.params;
     let data= await getCountry({name,limit,skip,id});
     return sendSuccess(res,data)
    }
    catch(err){
        console.log(err);
       return  throwError(res,err);
    } 
 
 };

 async function saveCountry(req,res) {
    try{
    let countryObj = Object.assign(req.body);
     let data= await saveCountryDetail(countryObj);
     console.log('data from controller',data);
     return sendSuccess(res,data)
    }
    catch(err){
        console.log(err);
       return  throwError(res,err);
    } 
 
 };

 async function updateCountry(req,res) {
    try{
        //if(!req.params.id) throwError(res)
        console.log('from update controller',req.body)
     let data= await updateCountryDetail(req.params.id,req.body);
     console.log('data from controller',data);
     return sendSuccess(res,data)
    }
    catch(err){
        console.log(err);
       return  throwError(res,err);
    } 
 
 };

 async function deleteCoutry(req,res) {
    try{
        //if(!req.param.id) throwError(res)
     let data= await deleteCoutryDetails(req.params.id);
     console.log('data from controller',data);
     return sendSuccess(res,data)
    }
    catch(err){
        console.log(err);
       return  throwError(res,err);
    } 
 
 };


module.exports = { importData, getCountryData, saveCountry, updateCountry, deleteCoutry };

