const express = require('express')
const App = express()
const mongoose = require('mongoose')
const env = require('dotenv')
env.config(); 
const MongoUser = process.env.MONGO_USERNAME
const MongoPass = process.env.MONGO_PASSWORD
const PORT = process.env.PORT
const userRoute = require('./Routes/user')
const userReg = require('./Routes/auth')
const productRoute = require('./Routes/Product')
const cartRoute = require('./Routes/Cart')
const orderRoute = require('./Routes/Order')

const razorRoute = require('./Routes/RazorPay')
const cors = require('cors')


mongoose.connect(`mongodb+srv://${MongoUser}:${MongoPass}@cluster0.kvifh.mongodb.net/Shopify?retryWrites=true&w=majority`).then(()=>
    console.log("DataBase Connected")).catch((err)=>{ console.log(err)})
    
    App.use(express.json())
    App.use(cors())
   
    
  
    App.use('/api/auth/',userReg);
    App.use('/api/users/',userRoute);
    App.use('/api/product/',productRoute);
    App.use('/api/cart/',cartRoute);
    App.use('/api/order/',orderRoute);
    App.use('/api/pay/',razorRoute);
    
  


App.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`)
})