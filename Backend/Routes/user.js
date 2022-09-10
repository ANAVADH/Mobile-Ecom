const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('./VerifyToken')
const App = require('express');
const User = require('../models/User');
const router = App.Router();


router.put('/:id',verifyTokenAndAuthorization, async (req,res)=>{

  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(req.body.password ,process.env.SEC_KEY).toString();
  }
  try{

   const updatedUser = await User.findByIdAndUpdate(req.params.id,{
      $set: req.body
    },{new:true})
    res.status(200).json(updatedUser)
  }catch(err){
    res.status(500).json(err)
  }

} )



router.delete('/:id',verifyTokenAndAdmin, async (req,res)=>{

  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(req.body.password ,process.env.SEC_KEY).toString();
  }
  try{
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("user deleted successfully")
  }   catch(err){
    res.status(500).json(err)
  }

} )

//find singlle user using id

router.get('/find/:id',verifyTokenAndAdmin, async (req,res)=>{

  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(req.body.password ,process.env.SEC_KEY).toString();
  }
  try{
     const user=  await User.findById(req.params.id)
     const {password, ...others} = user._doc
      res.status(200).json(others)
  }   catch(err){
    res.status(500).json(err)
  }

} )

//fetch all the all the users
router.get('/',verifyTokenAndAdmin, async (req,res)=>{

  const query = req.query.new;

try{
   const users=  query
   ? await User.find().sort({ _id: -1 }).limit(5)
   : await User.find();
 
    res.status(200).json(users)
}   catch(err){
  res.status(500).json(err)
}

} )


//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router