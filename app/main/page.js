import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Introduction from './Introduction'
import Grid from './Grid'


const page = () => {

  const balanceData = {
    titleText: "Balance Of Gaming",
    blurbText: "A balance of gaming and other actitivites is essential to enjoy benefits while minimizing risks for your digital wellbeing",
    video:"/images/gaming.mp4",
    image:"/images/image1.jpg",
    firstHeaderText: "Gaming Addiction",
    secondHeaderText: "Real Life Activities",
    firstParagraphText:"According to the latest data, there are approximately 3.32 billion active video gamers worldwide. Up to 4% of gamers are currently addicted to playing video games. This is a huge number and a prominent issue that needs to be addressed. Gaming addiction is a condition where people become overly obsessed with playing video games, neglecting other areas of their life. People who have this disorder experience withdrawal symptoms when not playing and continuing to game despite negative consequences. This addiction can lead to problems in relationships, school or work, and personal health. Gaming can be fun and it has it's positives but there needs to be a balance.",
    secondParagraphText:"To find a balance in gaming hours, doing real life activities is crucial. Neccesary activities include the basics such as ensuring you get sufficent sleep and that you are having sufficent nutrients through foods and drinks. Other activities include excercising, journaling, developing skills and pursuing hobbies that don't include a device. These activities not only will make gaming more rewarding and enjoying but will also ensure that you are not falling behind in important areas of your life. This will ultimatley enhance your digital wellbeing but also create a more balanced and fulfilling lifestyle that complements your gaming interests."

  }

  const gridData = [
    {id:1, galleryImage: "/images/gridImage1.png", headerText:"Sleep", bodyText:"Besides gaming, sleep should be one of your priorities. It is crucial to maintain physical health, cognitive function & emotional well being. Adequate rest supports optimal gaming performance, enhances mood stability, and contributes to overall quality of life, making it essential to balance gaming with sufficient sleep "},
    {id:2, galleryImage: "/images/gridImage2.png", headerText:"Checklist", bodyText:"A checklist is important for balancing gaming time as it helps manage important tasks you need to do in a day. Making sure you finish key tasks on your checklist before playing games will make sure you aren't falling behind on tasks non gaming related. You should aim to tick off alll your items on your checklist each day and track the checklist to see whether you are achieving your goals."},
    {id:3, galleryImage: "/images/gridImage3.jpeg", headerText:"Excercising", bodyText:"Besides gaming, maintaining your excercising should be one of your priorities. It promotes physical and mental health, boosts energy levels, enhances balance and coordination, and provides opportunities for social interaction. "},
    {id:4, galleryImage: "/images/gridImage4.jpeg", headerText:"Scheduling Gaming Time", bodyText:"Scheduling your gaming time is important for balancing gaming and real life acitvities. Setting a time constraint on gaming sessions ensures you have time for other activities in your day."},
    {id:5, galleryImage: "/images/gridImage5.png", headerText:"Communicating With Others", bodyText:"Besides gaming, communicating with others in real life such as family and friends should be one of your priorities. Real life communication  fosters meaningful social connections, provide emotional support and reduces feelings of isolation."},
    {id:6, galleryImage: "/images/gridImage6.jpeg", headerText:"Journaling", bodyText:"Jounaling is important for balancing game time as it allows you to be aware of emotional triggers that can cause long gaming sessions. It also  allows you to track how much time you have been allocating to gaming compared to other actiivities and to track your progress."},
    {id:7, galleryImage: "/images/gridImage7.jpeg", headerText:"Developing Skills", bodyText:"Besides Gaming, Developing SKills should be one of your priorities. It is crucial to develop skills such as coding or learning a musical instrument for cognitive development, enhancing your creativity and for career opportunities later on."},
    {id:8, galleryImage: "/images/gridImage8.jpeg", headerText:"Goal Setting", bodyText:"Goal setting is important for balancing gaming time as it allows you to progress over a long term on specific goals. It ensures you aren't focusing on too many things at once and that you are sure what you need to work on."},
    {id:9, galleryImage: "/images/gridImage9.jpeg", headerText:"Hobbies", bodyText:"Besides gaming, real life hobbies should be one of your priorities. Hobbies allow you to diversify your interests as it encourages exploration of new activities, skills and passions. Immersing yourself solely in gaming can also lead to burnout and fatigue, affecting your mental state."},

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