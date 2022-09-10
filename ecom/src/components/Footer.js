import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faInstagramSquare,faFacebookSquare,faGithub} from '@fortawesome/free-brands-svg-icons'
import {faPhone,faEnvelopeCircleCheck,faMapLocationDot} from '@fortawesome/free-solid-svg-icons'
import { mobile } from '../responsive'

const Container = styled.div` display: flex;
background-color:#b2bec3;
color:#00000;
${mobile({ flexDirection: "column" })}
`



const Left = styled.div`  flex: 2;
display: flex;
flex-direction: column;
padding: 20px;`
const Right = styled.div` flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`
const Center = styled.div`  flex: 1;
padding: 20px;`
const Logo = styled.img`height:40px;
width:140px`
const Desc = styled.p` margin: 20px 0px;`
const SocialContainer = styled.div` display: flex;`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  `;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
<Left>
<Logo src="https://lush.io/wp-content/uploads/2020/07/shopify-logo.png" alt='logo' />
<Desc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
<SocialContainer>
<SocialIcon color="3498db">
           <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> 
          </SocialIcon>
          <SocialIcon color="833AB4">
          <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon> 
          </SocialIcon>
          <SocialIcon color="3B5999">
          <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
          </SocialIcon>
          <SocialIcon color="95a5a6">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>

          </SocialIcon>


</SocialContainer>

</Left>
<Center>
  
<Title>Useful Links</Title>
<List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>


</Center>
<Right>

<Title>Get in touch.</Title>
        <ContactItem>
          <FontAwesomeIcon style={{marginRight:"10px"}} icon={faMapLocationDot}/> Calicut,Kerala-INDIA
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon style={{marginRight:"10px"}}icon={faPhone} /> +91 7025548288
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon style={{marginRight:"10px"}} icon={faEnvelopeCircleCheck} /> anavadhsuresh1042@gmail.com
        </ContactItem>
        <Payment src="https://miro.medium.com/max/585/1*hL648VDZp-s4XLQ2fqDbAA.png" />

</Right>


    </Container>
  )
}

export default Footer