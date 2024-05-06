import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../main/Hero';
import Introduction from '../main/Introduction';
import Grid from '../main/Grid'

const page = () => {
  const affectData = {
    titleText: "How Does Gaming Affect You",
    blurbText: "Gaming can have both positive and negative effects, influencing factors such as cognitive abilities, social interactions, and overall well-being.",
    video:"/images/gaming.mp4",
    image1:"/images/positives.jpeg",
    image2:"/images/neagatives.jpeg",
    alt1:"Positives Of Gaming",
    alt2:"Negatives Of Gaming",
    firstHeaderText: "Positives Of Gaming",
    secondHeaderText: "Negatives Of Gaming",
    firstParagraphText:"Gaming offers various positive aspects that contribute to personal development, entertainment, and social interactions. Gaming can improve cognitive abilities such as problem-solving, critical thinking, and strategic planning.Online multiplayer games provide opportunities for social interaction and collaboration with players from around the world. Gaming serves as a form of relaxation and stress relief for many individuals. Immersing oneself in a virtual world can offer a temporary escape from real-life stressors. Ultimately, gaming can have various benefits if it is balanced correctly with other activities. However, gaming has a very addicitve nature which leads people to develop a gaming disorder as they struggle with addiction leading to more disadvantages than benefits. ",
    secondParagraphText:"As gaming has a very addictive nature, it leads to many potential drawbacks. Excessive gaming can lead to physical health issues as such as obesity, strain injuries and other health problems associated with prologned sitting and minimal physical activity. Gaming addiction or excessive gaming can contribute to mental health issues such as depression, anxiety and social isolation. Other negative consequences can be poor academic/job preformance, financial issues and plenty of other more. This may lead to furthur immersion in a virtual world and less associated with the real world keeping the person in a loop of addiction."
  }

  const gridData = [
    {id:1, galleryImage: "/images/galleryImage1.png", headerText:"Sleep", bodyText:"A gaming addiction can severly disrupt sleep patterns causing insomnia, irregular sleep patterns and poor sleep quality. It can lead to diffculty falling asleep and thus shortened sleep duration. Sleep deprivation resulting from gaming addiction can exacerbate daytime fatigue, impair cognitive function, and contribute to physical and mental health issues"},
    {id:2, galleryImage: "/images/galleryImage2.jpeg", headerText:"Physical Health", bodyText:"A gaming addiction can have detrimental effects on physical health, leading to issues such as repetitive strain injuries, eyestrain and headaches. Additionally, excessive gaming may contribute to an increased risk of obesity and cardiovascular problems. These issues that occur physically can also negativley impact your mental health in the long term. "},
    {id:3, galleryImage: "/images/galleryImage3.jpeg", headerText:"Mental Health", bodyText:" A gaming addiction can significantly impact mental health by worsening conditions such as depression, anxiety, and social isolation. Excessive gaming may lead to neglect of real-life responsibilities, withdrawal from social interactions, and disruptions in sleep patterns, contributing to deteriorating mental well-being and worse digital wellbeing. "},
    {id:4, galleryImage: "/images/galleryImage4.png", headerText:"Relationships", bodyText:"A gaming addiction can worsen relationships with family, friends and partners. Partners may feel ignored and isolated while family members may struggle with communication breakdowns and emotional distance. Frequent arugments can arise about how the person is more interested in games than their loved ones."},
    {id:5, galleryImage: "/images/galleryImage5.jpeg", headerText:"Hygeine", bodyText:" A gaming addiction can lead to neglect of personal hygiene as individuals prioritize gaming over self-care tasks such as bathing, grooming, and changing clothes. Over time, poor hygiene habits associated with gaming addiction can contribute to physical discomfort, body odor, and skin issues, impacting their overall well-being and social interactions."},
    {id:6, galleryImage: "/images/galleryImage6.png", headerText:"School", bodyText:"A gaming addiction leads to procasination of school work, overdue homework and poor time management skills which lead to academic failure. A severe addiction can lead to the student skipping class hindering not only their grades but furthur contributing to a lack of social interactions."},
    {id:7, galleryImage: "/images/galleryImage7.jpeg", headerText:"Identity", bodyText:"A gaming addiction can sigficantly impact someones identity. This is as it may lead to an over-reliance on video games for validation, social interaction and a sense of accomplishment. People with a gaming addiction may start to prioritize achievements in the video game instead of achievements in real life creating a fake sense of identity."},
    {id:8, galleryImage: "/images/galleryImage8.jpeg", headerText:"Loss Of Time", bodyText:"A gaming addiction can lead to a significant loss of time as peope become absorbed in the activity. This leads to ignorance of other responsibilities and interests. These responsibilities can be important obligations which may lead to regret or frustration later on."},
    {id:9, galleryImage: "/images/galleryImage9.jpeg", headerText:"Career", bodyText:"A gaming addiction can negativley impact someones future career due to academic underachievemnt, difficuly meeting deadlines and engaging in potential career oportunitiies. This can lead to a lack of advancement in their chosen career path. They may hinder their life sucess and aspirations due to this addiction."}
]

const navbarData = {
  data1: true,
  data2: false
}

  return (
    <div className='font-custom'>
        <Navbar data={navbarData}/>
        <Hero data={affectData}/>
        <Introduction data={affectData}/>
        <Grid data={gridData} />
    </div>
  )
}

export default page