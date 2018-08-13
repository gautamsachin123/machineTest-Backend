const countryDao = require('./country.dao');
const client = require('axios');
const { resolve } = require('../../common/util');
const exceptionGenerator = require('../../common/exception/exception.generator')


async function importDataWebService() {
    let { data } = await client.get("https://restcountries.eu/rest/v1/all");
    console.log('before save');
    let { data: response, error } = await resolve(Promise.all(data.map(async (da) => {
        return await countryDao.create(da);
    })))
    console.log(response, error);
    if (error) throw exceptionGenerator.createCustomException(error);
    return { msg: 'data imported successfully' };
}


async function getCountry({name ,limit, skip,id }) {
    console.log('name is ',name);
    let where = {}
    if(id) {where._id= id};
    if (name) where.name = new RegExp(name, 'i')
    limit = limit ? parseInt(limit) : 10;
    skip = skip ? parseInt(skip) : 0;
    console.log(limit, skip)
    let { data: count, error: dbError } = await resolve(countryDao.count());
    console.log('where is ',where); 
    let { data, error } = await resolve(countryDao.find(where, limit, skip, {name:1}));
    if (error) throw exceptionGenerator.createCustomException(error);
    data = data.map((model)=>model.toJSON())
    //data.push(count);
    //console.log(data);
    return data;

}

async function saveCountryDetail(countryObj) {
    let { data, error } = await resolve(countryDao.create(countryObj));
    if (error) throw exceptionGenerator.createCustomException(error);
    //console.log(data);
    return data;

}



async function updateCountryDetail(countryId,obj) {
    let { data, error } = await resolve(countryDao.updateById(countryId,obj));
    if (error) throw exceptionGenerator.createCustomException(error);
    //console.log(data);
    return data;

}

async function deleteCoutryDetails(countryId) {
    let { data, error } = await resolve(countryDao.remove({_id:countryId}));
    if (error) throw exceptionGenerator.createCustomException(error);
    if(data.n==0) return {msg:'id does not exist'};
    return {msg:'delete successfully'};

}



module.exports = { importDataWebService, getCountry, saveCountryDetail, updateCountryDetail, deleteCoutryDetails };