
import React from 'react'
import styled from 'styled-components'



const Message = styled.div`
height:30px;
background-color:#b2bec3;
display:flex;
font-size:14px;
font-weight:500;
color:#00000;

align-items:center;
justify-content:center;

`

const Announceement = () => {
  return (
 <Message>For 24 hours, our VIP text subscribers can get 15% off all home gym equipment.</Message>
  )
}

export default Announceement