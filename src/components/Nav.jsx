import React, {useState, useEffect} from 'react'
const [navColapse, setNavColapse] = useState(false)
 useEffect((setNavColapse) => {
  const lastScroll =0,
 
  const getScroll= ()=> window.scrollY;
  if(getScroll()>30){
 setNavColapse(true)
}
}, [])

function Nav() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">

      <div className="flex items-center gap-8 px-6 py-3
      rounded-full border border-white/10
      bg-white/5 backdrop-blur-md
      shadow-[0_0_20px_rgba(0,0,0,0.3)]">

        {/* Logo */}
        <div className="text-white font-semibold">
          <a href="#" className="flex items-center gap-2">
            <div className="text-sm">
              <img src="logo.png" alt="image" className="w-6 h-6" />
            </div>
          Imtanan
          </a>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-6 text-gray-300">

          <li>
            <a
              href="#"
              className="hover:text-white hover:bg-gray-500 rounded-full hover:px-2 hover:py-2 transition duration-500"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-white  hover:bg-gray-500 rounded-full hover:px-2 hover:py-2 transition duration-500"
            >
              TechStack
            </a>
          </li>

          <li>
            <a
              href="#"
              className="px-4 py-2 rounded-full
              border border-[#9b7bfc]
              text-[#9b7bfc]
              hover:bg-[#9b7bfc]
              hover:text-white
              transition duration-500"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}



export default Nav