// import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Announceement from '../components/Announceement';
// import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
// import StripeCheckout from "react-stripe-checkout"
// import { USERRequest } from '../requestMethord';
// import  { useNavigate }  from "react-router";
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { removeProducts } from '../redux/cartRedux';


//  const url = "http://localhost:8080/api";
//  const stripeKey = "pk_test_51LLiocSIVeA0fHXrwLEaHAMf4ERXIPRw5Y4Feys0Qmoinuy82WgGFmtmSgnU961pHNEUOqCB4lrHnPCLs5TdtpFp00NfbygVjN"












const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

// const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: ${(props) => props.color === "#0984e3" && "#0984e3" };
//   background-color: ${(props) =>  props.color === "#000" && "#000"};
  
//   color: white;
//   font-weight: 600;
//   cursor:pointer;
// `;


const Cart = () => {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const handleDel = (product) => {
    dispatch(removeProducts(product))

}


  // const handleClickk = (type) =>{

  //   if(type === "inc"){

  //     qntity = qntity +1;
  //   }else{
  //     qntity = qntity -1;
  //   }

  // }

  // const [stripeToken , setStripeToken] = useState(null)
  // const history = useNavigate();

  // const onToken = (token) =>{

  //   setStripeToken(token);
  //   console.log(stripeToken)
  // }

  // useEffect(() =>{
  //   const makeReq = async ()=>{
  //     try{
  //       const res = await USERRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: cart.total*100,
  //       });
  //       history.push("/success", {
  //         stripeData: res.data,
  //         products: cart.total, });

  //     }catch{}
  //   }
  //  stripeToken &&  makeReq()

  // },[stripeToken,cart.total, history])

  // const handleStripe = () => {
  //   axios
  //     .post(`${url}/checkout/payment`, {
  //       cart,
      
  //     })
  //     .then((response) => {
  //       if (response.data.url) {
  //         window.location.href = response.data.url;
  //       }
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  //#################################################################################################################
// 	const initPayment = (data) => {
// 		const options = {
// 			key: "rzp_test_WnglX5hx68tTRU",
// 			amount: data.amount,
// 			currency: data.currency,
// 			name: "Shopify",
// 			description: "Test Transaction",
// 			image:"http://blog.printkeg.com/wp-content/uploads/2014/12/shopify-offers.png" ,
// 			order_id: data.id,
// 			handler: async (response) => {
//         alert(response.razorpay_payment_id)
// 				try {
// 					const verifyUrl = "http://localhost:8080/api/pay/verify";
// 					const { data } = await axios.post(verifyUrl, response);
// 					console.log(data);
// 				} catch (error) {
// 					console.log(error);
// 				}
// 			},
// 			theme: {
// 				color: "#4cd137",
// 			},
// 		};
//     const rzp1 = new window.Razorpay(options);
// 		rzp1.open();
// 	}

// const handleRazor = async () => {
// 		try {
// 			const orderUrl = "http://localhost:8080/api/pay/razor";
// 			const { data } = await axios.post(orderUrl, { amount: cart.total});
// 			console.log(data);
// 			initPayment(data.data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
//########################################################################################################################

  return (
    <Container>
        <Announceement/>
    <NavBar/>
    
    <Wrapper>
      <Title>CART ITEMS</Title>
      <Top>
        <Link to='/'>
        <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
       
        <TopTexts>
          
          <TopText>Shopping Bag({cart.quantity})</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        { cart.total?
        <Link to="/shipping">
        <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Link>:  <div></div>}
       
      </Top>
      <Bottom>
        <Info>
           { cart.products.map((product) => ( <Product>
            <ProductDetail>
              <Image src={product.img} />
              <Details>
                <ProductName>
                  <b>Product:</b> {product.title}
                </ProductName>
                <ProductColor color={product.color} />
                <ProductSize>
                  <b>Variant:</b> {product.varient}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
             
                <ProductAmount>{product.quantity}</ProductAmount>
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDel(product)} ></FontAwesomeIcon>
              </ProductAmountContainer>
              <ProductPrice>₹{product.price * product.quantity}</ProductPrice>
            </PriceDetail>
          </Product>

         )) }
          <Hr />
         
        </Info>
        <Summary>
          <SummaryTitle key={Product._id}>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>₹300</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>₹-300</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
          </SummaryItem>
          {/* <StripeCheckout name="Shopify"
                  image="https://pbs.twimg.com/profile_images/1282739522044940288/CMDXBNT0_400x400.png"
                  billingAddress
                  currency="INR"
                  shippingAddress
                  description={`The totoal amount is ₹ ${cart.total}`} 
                  amount={cart.total*100}
                  token={onToken}
                  stripeKey={stripeKey}> */}

              {/* <Link to='/stripe'>

              <Button color='#000' >
                  Pay via Stripe
                  </Button>
              
              
              </Link>
                

                 

                
       
          {/* </StripeCheckout> */}
          {/* <Button color='#0984e3' onClick={handleRazor}>Pay via Razorpay</Button> */} 
        </Summary>
      </Bottom>
    </Wrapper>
    {/* <Footer/> */}
  </Container>

  )
         }

export default Cart