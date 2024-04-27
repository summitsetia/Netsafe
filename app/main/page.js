import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Introduction from './Introduction'


const page = () => {

  const balanceData = {
    text1: "Balance Of Gaming",
    text2: "A line about some information of the Balance of Gaming",
    video:"/images/gaming.mp4",
    image:"/images/image1.jpg"

  }
  return (
    <div>
      <Navbar />
      <Hero data={balanceData}/>
      <Introduction data={balanceData} />
    </div>
  )
}

export default page