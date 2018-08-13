const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
let {verifyCredentials} = require('../user/user.service');
const {resolve} = require('../../common/util');

module.exports = new localStrategy(  { usernameField: 'email', passwordField: 'password' },async function( email,password,done){
if(!email || !password)return done(true) ;
let {data,error} = await resolve( verifyCredentials(email,password));
if(error) return done(error);
return done(null,data);
})