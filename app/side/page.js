import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../main/Hero';
import Introduction from '../main/Introduction';
import Grid from '../main/Grid'

const page = () => {
  const affectData = {
    text1: "How Does It Affect You",
    text2: "random shit",
    video:"/images/gaming.mp4",
    image:"/images/image1.jpg"

  }

  const gridData = [
    {id:1, image: "/images/image1.jpg", text1:"", text2:""},
    {id:2, image: "/images/image2.jpg", text1:"", text2:""},
    {id:3, image: "/images/image3.jpg", text1:"", text2:""},
    {id:4, image: "/images/image4.jpeg", text1:"", text2:""},
    {id:5, image: "/images/image1.jpg", text1:"", text2:""},
    {id:6, image: "/images/image2.jpg", text1:"", text2:""},
    {id:7, image: "/images/image3.jpg", text1:"", text2:""},
    {id:8, image: "/images/image4.jpeg", text1:"", text2:""},
]
  return (
    <div>
        <Navbar />
        <Hero data={affectData}/>
        <Introduction data={affectData}/>
        <Grid data={gridData} />
    </div>
  )
}

export default page