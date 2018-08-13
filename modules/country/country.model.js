const mongoose = require('mongoose');
const { modelToJSONSchema } = require('mongoose-jsonschema');

var countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  topLevelDomain: [{
    type: String, default: ''
  }],
  alpha2Code: {
    type: String, default: ''
  },
  alpha3Code: {
    type: String, default: ''
  },
  callingCodes: [{
    type: String, default: ''
  }],
  capital: {
    type: String, default: ''
  },
  altSpellings: [{
    type: String, default: ''
  }],
  region: {
    type: String, default: ''
  },
  subregion: {
    type: String, default: ''
  },
  population: { type: Number, default: 0 },
  latlng: [{
    type: String, default: ''
  }],
  demonym: String,
  area: { type: Number, default: 0 },
  gini: { type: Number, default: 0 },
  timezones: [
    {
      type: String, default: ''
    }],
  borders: [
    {
      type: String, default: ''
    }],
  nativeName: {
    type: String, default: ''
  },
  numericCode: { type: Number, default: 0 },
  currencies: [
    {
      type: String, default: ''
    }],
  languages: [
    {
      type: String, default: ''
    }],

  // translations: [
  //   {
  //     type: String
  //   }],
  relevance: { type: Number, default: 0 }



});
countrySchema.statics.toJSONSchema = () => modelToJSONSchema(countrySchema);
let country = mongoose.model('country', countrySchema);

module.exports = country