import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Links from "./components/Links";


const headerItems = {
  image1:"/images/image1.jpg",
  image2:"/images/image2.jpg",
  image3:"/images/image3.jpg"
}

const bodyItems = {
  image1:"/images/image4.jpeg",

}

const navbarData = {
  data1: true,
  data2: true
}

export default function Main() {
  return (
    <div>
      <Navbar data={navbarData}/>
      <Header headerItems={headerItems}/> 
      <Body  bodyItems={bodyItems}/>
      <Links />
    </div>
  );
}
