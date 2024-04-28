import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Introduction from './Introduction'
import Grid from './Grid'


const page = () => {

  const balanceData = {
    text1: "Balance Of Gaming",
    text2: "A line about some information of the Balance of Gaming",
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
    {id:9, image: "/images/image1.jpg", text1:"", text2:""},
    {id:10, image: "/images/image2.jpg", text1:"", text2:""},
    {id:11, image: "/images/image3.jpg", text1:"", text2:""},
    {id:12, image: "/images/image4.jpeg", text1:"", text2:""},
]
  return (
    <div>
      <Navbar />
      <Hero data={balanceData}/>
      <Introduction data={balanceData} />
      <Grid data={gridData}/>
    </div>
  )
}

export default page