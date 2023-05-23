import React from 'react'
import HomePageCarousel from '../components/HomePageCarousel/HomePageCarousel'
import Products from './Products'
import BringTheSprint from '../components/cards/BringTheSprint'
import LoginSingUp from '../components/Form/LoginSingUp'

function Home() {
  return (
    <div>
      <HomePageCarousel/>
      <BringTheSprint/>
      <Products/>
    </div>
  )
}

export default Home
