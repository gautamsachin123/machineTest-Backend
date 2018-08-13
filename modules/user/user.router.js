const router = require('express').Router();
const {create, login} = require('./user.controller');
const {passport,authorizeUser} = require('../authentication/');

router.post('/register',create);
// router.post('/login',passport.authenticate('local'),(req,res)=>{
//     console.log(req.user);
//     res.status(200).send('login successfull');
// })
router.post('/login',authorizeUser,login);



module.exports = router;