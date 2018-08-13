const passport = require('passport');
const  {sendSuccess,throwError }  = require('../../common/response.handler') ;
const {verifyToken,createToken} = require('./auth');

passport.use(require('./local.authentication'));

 async function authorizeUser(req,res,next) {
     return passport.authenticate('local',(err,user)=>{
        if(err || !user){
            return throwError(res, err);
        }  
        
        const token = createToken(user);
        req.user= user;
        req.token = token;
        return next()
    })(req,res,next);
}

// function authorizeUser (req,res,next){
//     console.log('inside the middleware function')
//     next();
// }
module.exports = {passport,authorizeUser};