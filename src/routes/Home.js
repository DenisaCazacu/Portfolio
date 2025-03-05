import React from 'react'
import Navbar from "../Components/Navbar"
import HelloSection from "../Components/HelloSection"
import IntroductionSection from "../Components/IntroductionSection"
import Footer from "../Components/Footer"
import "./HomeStyle.css"

export const Home = () => {
  return (
    <div className='home-page'>
      <Navbar/>
      <HelloSection/>
      <IntroductionSection />
      <Footer />
    </div>
  )
}
export default Home;