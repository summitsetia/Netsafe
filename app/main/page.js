import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'

const page = () => {

  const balanceData = {
    text1: "Balance Of Gaming",
    text2: "A line about some information of the Balance of Gaming"

  }
  return (
    <div>
      <Navbar />
      <Hero data={balanceData}/>
    </div>
  )
}

export default page