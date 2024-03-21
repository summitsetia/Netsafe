import React from 'react'

const Navbar = ({items}) => {
    return (
        <div class="flex flex-col">
        <nav class="bg-[#18223C] bg-opacity-25 h-32 flex space-x-80 justify-between">
          <img class="w-26 h-16" src={"./images/logo.png"} alt="Logo Of Netsafe"/>
          <ul class="text-white flex row-auto flex-row ">
            <li class="block">{items.text1}</li>
            <li class="block">{items.text2}</li>
          </ul>
        </nav>
      </div>
    )
  }
  
  export default Navbar