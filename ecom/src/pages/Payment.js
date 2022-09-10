import styled from "styled-components";
import { mobile } from '../responsive';
import React from 'react'
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios';
import {  useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { selectShipping } from "../redux/ShippingRedux";









const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  ${mobile({ padding: "10px" })}
`;
const Summary = styled.div`
  flex: 3;
 
  border-radius: 10px;
  padding: 20px;

  height: 50vh;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.color === "#0984e3" && "#0984e3" };
  background-color: ${(props) =>  props.color === "#000" && "#000"};
  
  color: white;
  font-weight: 600;
  cursor:pointer;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
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
// const TopTexts = styled.div`
// ${mobile({ display: "none" })}
// `;
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Bottom = styled.div`
  display: flex;
  
  justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  padding-left:280px;
`;




const Payment = () => {

  
    const cart = useSelector(state => state.cart);
	const address = useSelector(selectShipping);
  let history = useNavigate()


  




  

  




    const initPayment = (data) => {
		const options = {
			key: "rzp_test_WnglX5hx68tTRU",
			amount: data.amount,
			currency: data.currency,
			name: "Shopify",
			description: "Test Transaction",
			image:"http://blog.printkeg.com/wp-content/uploads/2014/12/shopify-offers.png" ,
			order_id: data.id,
			handler: async (response) => {
        history("/success",{state:{Razor:response.razorpay_payment_id,products: cart}});
			console.log(data);

    
     
       
				try {
					const verifyUrl = "http://localhost:8080/api/pay/verify";
					const { data } = await axios.post(verifyUrl, response);
         
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#4cd137",
			},
      
   
		};
   
    const rzp1 = new window.Razorpay(options);
		rzp1.open();
   
	}

const handleRazor = async () => {
  
		try {
			const orderUrl = "http://localhost:8080/api/pay/razor";
			const { data } = await axios.post(orderUrl, { amount: cart.total});
      
      // history("/success",{state:{Razor:data.data,products: cart}});
			// console.log(data);
      
			initPayment(data.data);
    
		} catch (error) {
			console.log(error);
		}

	};


  return (
	
<Container>

    <Wrapper>
	<Title>PAYMENT</Title>
	<Top>
        <Link to='/'>
        <TopButton>Cancel Order</TopButton>
        </Link>
      
       
      </Top>
	  <Bottom>
		<Info>
			
		
	 
	<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Shipping Address</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">confirm address</Card.Subtitle>
        <Card.Text>{address.fullName} </Card.Text>
		<Card.Text>{address.address} </Card.Text>
		<Card.Text>{address.city} </Card.Text>
		<Card.Text>{address.postalCode} </Card.Text>
		<Card.Text>{address.country} </Card.Text>
        <Card.Link href="/shipping">Change Address</Card.Link>
     
      </Card.Body>
    </Card>
	</Info>
        <Summary>
		<>
      {[
       
        'Light',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Payment Details</Card.Header>
          <Card.Body>
            <Card.Title>₹ {cart.total} </Card.Title>
            <Card.Text>We issue refunds for Contracts within 30 days of the original purchase of the Contract.
			  
            </Card.Text>
			





<Card.Text>
              
			  
            </Card.Text>


        <Button color='#0984e3' onClick={handleRazor}>Pay via Razorpay</Button>
          </Card.Body>
        </Card>
      ))}
    </>

       
        </Summary>

		</Bottom>

    </Wrapper>



</Container>
  )
}

export default Payment
