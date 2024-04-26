import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../main/Hero';

const page = () => {
  const affectData = {
    text1: "How Does It Affect You",
    text2: "random shit"
  }
  return (
    <div>
        <Navbar />
        <Hero data={affectData}/>

    </div>
  )
}

export default page