import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../main/Hero';
import Introduction from '../main/Introduction';

const page = () => {
  const affectData = {
    text1: "How Does It Affect You",
    text2: "random shit",
    video:"/images/gaming.mp4",
    image:"/images/image1.jpg"

  }
  return (
    <div>
        <Navbar />
        <Hero data={affectData}/>
        <Introduction data={affectData}/>

    </div>
  )
}

export default page