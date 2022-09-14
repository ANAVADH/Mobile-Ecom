const { check,validationResult } = require('express-validator')


exports.validator = [
    check('username')
    .notEmpty()
    .withMessage('username is required'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('password must be atleast 6 character long.')
];
exports.validateSignin = [
    check('username').notEmpty()
   .withMessage('Valid Username is required'),
    check('password')
   .isLength({min:5})
   .withMessage('invalid password')
];

exports.validated = (req,res,next) =>{
const errors = validationResult(req);
if(errors.array().length > 0 )
    return res.status(400).json({errors: errors.array()[0].msg})
    next();

}