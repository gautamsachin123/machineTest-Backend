  const mongoose = require('mongoose');  
  const mongooseHidden = require('mongoose-hidden')()

  const UserSchema = new mongoose.Schema({  
    name: String,
    email: {type:String, unique:true},
    password: {type: String ,hideJSON: true, required:true }
  });

  UserSchema.plugin(mongooseHidden)

  let user = mongoose.model('User', UserSchema);

  module.exports = user;