import Navbar from "./components/Navbar";
import Header from "./components/Header";

const items = {
  text1:"How Does it Affect you",
  text2:"Balance of Gaming",
  image:"./images/logo.png"
};


const items1 = {
  image1:"/images/image1.jpg",
  image2:"/images/image2.jpg",
}

export default function Home() {
  return (
    <div>
      <Navbar items={items} />
      <Header items1={items1}/> 
    </div>
  );
}
