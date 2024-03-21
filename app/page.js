import Image from "next/image";
import Navbar from "./components/Navbar";

const items = {
  text1:"How Does it Affect you",
  text2:"Balance of Gaming",
};

export default function Home() {
  return (
    <div>
      <Navbar items={items} />
    </div>
  );
}
