
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { selectUser } from "../redux/AuthRedux";
// import { clearProducts } from "../redux/cartRedux";


import { selectShipping } from "../redux/ShippingRedux";
import { USERRequest } from "../requestMethord";

const Success = () => {
  // const dispatch =useDispatch()
 
  const {state} = useLocation();
  
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = state.Razor;
  
  const cart = useSelector(state => state.cart);
  const User = useSelector(selectUser);
  const Address = useSelector(selectShipping);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
   
    const createOrder = async () => {
      
      try {
        const res = await USERRequest.post("/order", {
          userId: User._id,
          products: cart.products?.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: Address.address,
        });
        setOrderId(res.data._id);
       
        
        
        
     
    
      } catch {}
    };
   data && createOrder();
  }, [cart, data, User , Address ]);


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
      {orderId
        ? `Order has been created. Your order Id is ${orderId}`
        : `Some thing went wrong `}
        <Link to='/'>
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;