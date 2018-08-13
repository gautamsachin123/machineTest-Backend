    const {verify, sign} = require('jsonwebtoken');
    const {system} = require('config');

    async function verifyToken(req,res, next) {
        try{
        let token = req.headers.authorization;
        let user = await verify(token,system.JWT_SECRET);
        req.user= user;
        next();
        }
        catch(err){
    res.status(401).send({msg:'access token is not valid'});
        }
    }

     function createToken ({email}) {
     return sign({email},system.JWT_SECRET);
    }


    module.exports ={verifyToken,createToken};