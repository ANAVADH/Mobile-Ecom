import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
// import Cart from "./pages/Cart";
// import SignIn from "./pages/SignIn";
import Getin from "./pages/Getin";

// import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductSing from "./pages/ProductSing";
// import Done from "./pages/Done";

import Cart from "./pages/Cart";
import Signup from "./pages/SignUp";

// import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/AuthRedux";
import ShippingAddressScreen from "./pages/ShippingPage";
import Payment from "./pages/Payment";
import { selectShipping } from "./redux/ShippingRedux";
import Success from "./pages/Success";

// import { useSelector } from "react-redux";



function App() {


  

  
  const cart = useSelector(state => state.cart);
const user = useSelector(selectUser)
const address = useSelector(selectShipping)

  


  return (
    <div className="App">

<Routes>
        <Route  path="/" element={user?<Home/> : <Navigate to='/login' /> } />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductSing/>} />
        <Route path="/cart" element={user?<Cart/>: <Navigate to='/login' />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Getin/>} />
        {/* <Route path="/success" element={user?<Done/>: <Navigate to='/login' />} /> */}
        <Route path="/register" element={user ? <Navigate to='/' /> : <Signup/>} />
       
        <Route path="/shipping" element={cart.total?<ShippingAddressScreen/>:<Navigate to='/cart' />} />
        <Route path="/payment" element={user && address && cart.total ? <Payment/>:<Navigate to='/shipping' />} />
        <Route path="/success" element={user?<Success/>:<Navigate to='/login' />} />
 </Routes>
   
    </div>
  );
}

export default App;
