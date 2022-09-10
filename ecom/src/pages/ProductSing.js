import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announceement from '../components/Announceement'
import NavBar from '../components/NavBar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus,faRemove} from '@fortawesome/free-solid-svg-icons'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethord'
import { addProducts } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'





const Container = styled.div``
const Wrapper = styled.div`padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}`
const ImageContainer = styled.div`  flex: 1;`
const Image = styled.img`  width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}`



const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100px;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;



const ProductSing = () => {

  const location = useLocation();

 const id = location.pathname.split("/")[2];





 const [data , setData] = useState({});
const [quantity , setQuantity] = useState(1)
const [color , setColor] = useState("");
const [varient , setVarient] = useState("");
const dispatch = useDispatch()


 useEffect(()=>{

  const getProductss = async () =>{
    try{
      const res = await publicRequest.get('/product/find/'+ id)
      setData(res.data)

    }catch{}
  }
  getProductss();
  

  
 },[id])



 const handleClick = (type)=>{
  if(type === 'inc'){

    setQuantity(quantity + 1) 

  }else{
  quantity > 1 &&  setQuantity(quantity - 1 )
}
 }
 const clickHandle = ()=>{

  dispatch(
      addProducts({ ...data, quantity, color, varient })
    );
  
  }
return (
    <Container>
        <Announceement/>
        <NavBar/>
        <Wrapper>
            <ImageContainer>
                <Image src={data.img} />
            </ImageContainer>

            <InfoContainer>
          <Title>{data.title}</Title>
          <Desc>{data.desc}</Desc>
          <Price>₹ {data.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>


              {data.color?.map((data)=>( 
                        
              <FilterColor color={data} key={data} onClick={()=> setColor(data)} /> 
           
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Varient</FilterTitle>
              <FilterSize onChange={(e) => setVarient(e.target.value)}>
                   {data.varient?.map((v)=>(
                     <FilterSizeOption key={v}>{v}</FilterSizeOption>

                   ))}


               
             
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <FontAwesomeIcon icon={faRemove} onClick={() => handleClick("dec")}></FontAwesomeIcon>
              <Amount>{quantity}</Amount>
              <FontAwesomeIcon icon={faPlus}   onClick={() => handleClick("inc")}></FontAwesomeIcon>
            </AmountContainer>
            <Button onClick={clickHandle}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>


        </Wrapper>

    </Container>
  )
}

export default ProductSing