import React from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
// import logoImg from '../logo.png'
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { logout, selectUser } from '../redux/AuthRedux';





//#######################################################################
const Container = styled.div`
height:60px;
// background-color:red;
${mobile({ height: "50px" })}
}
;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`flex:1;
text-align:center;`
const Right = styled.div`flex:1;
align-items:center;
display:flex;
justify-content:flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`
// const Language = styled.span`
// cursor:pointer;
// font-size:20px;
// ${mobile({ display: "none" })}
// `
const SearchContainer = styled.div`
border:0.5px solid lightgrey;

display:flex;
align-items:center;
margin-left:25px;
paddding:5px;


` 

const Input = styled.input`
border:none;
${mobile({ width: "50px" })}
`

const Logo = styled.img`
height:40px;
${mobile({ height: "30px" })}

`
const MenuItems = styled.div`
font-size:20px;
cursor:pointer;
margin-left:25px;
decorations:none;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

`

//###########################################################

const NavBar = () => {

const user = useSelector(selectUser)
const quantity = useSelector(state => state.cart.quantity)
const dispatch = useDispatch();


const handleLogout = (e) =>{
    e.preventDefault();

    dispatch(logout())

}



  return (
    <Container>
        <Wrapper>
            <Left>
                {/* <Language>EN</Language> */}
                <SearchContainer>
                    <Input/>
                <FontAwesomeIcon icon={faSearch} fontSize="20px" color='grey'></FontAwesomeIcon>
                </SearchContainer>
               
                
            </Left>
            <Center>
                <Logo src="https://lush.io/wp-content/uploads/2020/07/shopify-logo.png" alt='logo' />
            </Center>
            <Right>
                
           {user ?<MenuItems>Welcome Back {user.username}</MenuItems>: <Link to='/register'> <MenuItems>REGISTERE </MenuItems>   </Link>}
         
           <Link to='/login'> 
            { user? <MenuItems onClick={(e) => handleLogout(e)} >SIGN OUT</MenuItems>:  <MenuItems>SIGN IN</MenuItems> }
            </Link>
        
            <Link to='/cart'>
            <MenuItems>
            
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartIcon />
              </Badge>
            
          
          
                      {/* <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> */}
                      
                      </MenuItems>
            </Link>
      
         

                
            </Right>
        </Wrapper>
        
        </Container>
  )
}

export default NavBar