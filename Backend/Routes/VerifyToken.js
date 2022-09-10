const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECKEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

// const verifyToken = (req,res,next)=>{
//   const authHeader = req.headers.authorization
//   if(!authHeader){
//     res.status(401).json("you are not authenticated")
    
//   }else{
   
//   const token = req.headers.authorization.split(" ")[1];

//     jwt.verify(token,process.env.JWT_SECKEY,(err,user)=>{
//       if(err)  res.status(401).json("Invalid token...!")
//          req.user = user;
//          next();

//     })
//   }
// };

const verifyTokenAndAuthorization = (req,res,next)=>{
  verifyToken(req,res,()=>{
    if(req.user.id === req.params.id || req.user.isAdmin){;
      next()
    }else{
      res.status(401).json("restricted usage")
    }
  })
}

const verifyTokenAndAdmin = (req,res,next)=>{
  verifyToken(req,res,()=>{
    if(req.user.isAdmin){
      next()
    }else{
      res.status(403).json("restricted usage")
    }
  })
}



module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
};





































































// const jwt = require("jsonwebtoken");
// const JWT_SECKEY = process.env.JWT_SECKEY

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.token;
//   if (authHeader) {
//     const token = authHeader.split(" ")[1];
//     jwt.verify(token,JWT_SECKEY, (err, user) => {
//       if (err) res.status(403).json("Token is not valid!");
//       req.user = user;
//       next();
//     });
//   } else {
//     return res.status(401).json("You are not authenticated!");
//   }
// };


// const verifyTokenAndAuthorization = (req, res, next) => {


//   verifyToken(req, res, () => {

//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json("You are not alowed to do that!");
//     }
//   });
// };


// module.exports = {verifyToken,verifyTokenAndAuthorization}