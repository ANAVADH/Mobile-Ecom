import React, { useState } from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {sliderItems} from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
height:100vh;
width: 100%;
display:flex;
position:relative;
overflow:hidden;
${mobile({ display: "none" })}
`
const Arrow = styled.div`
width:50px;
height:50px;
border-radius:50%;
background-color:#ffff;
position:absolute;
top:0;
bottom:0;
align-items:center;
justify-content:center;
display:flex;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper = styled.div`;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props=> props.slideIndex * -100 }vw)`
const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${(props)=>props.bg};
`
const ImageContainer = styled.div`
height:100%;
flex:1;`
const InfoContainer = styled.div`flex:1;
padding:50px;`

const Image = styled.img`
 height:80%;
`
const Title = styled.h1`font-size:70px;`
const Desc = styled.p`margin:50px 0;
font-size:20px;
font-weight:500;
letter-spacing:3px;`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
opacity:0.5;
`
const Slider = () => {

const [slideIndex , setSlideIndex] = useState(0);
const handleClick = (direction)=>{

if(direction === "left"){

  setSlideIndex(slideIndex > 0 ? slideIndex -1: 3 );
}else{
  setSlideIndex(slideIndex < 3 ? slideIndex +1: 0)
}
};
 return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <FontAwesomeIcon icon={faAngleLeft} ></FontAwesomeIcon>
           </Arrow>
           <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(

           
            <Slide bg={item.bg}>

            <ImageContainer>
            <Image src={item.img} alt='banner'  />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>{item.button}</Button>
            </InfoContainer>

            </Slide>
             ))}
           </Wrapper>
           <Arrow direction="right" onClick={()=> handleClick("right")}>
           <FontAwesomeIcon icon={faAngleRight} ></FontAwesomeIcon>
           </Arrow>
    </Container>
  )
}
export default Slider