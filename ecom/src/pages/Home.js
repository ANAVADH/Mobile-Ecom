import React from 'react'
import Announceement from '../components/Announceement'
import Category from '../components/Category'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'



const Home = ({user,LogFn}) => {



  return (
    <div><Announceement/>
        <NavBar User={user} Logfn={LogFn} />
      <Slider/>
      <Category/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home