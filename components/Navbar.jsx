import images from "../assets/Imagies"
import Link from 'next/link'
import {HiX, HiMenuAlt4} from 'react-icons/hi'  
import {motion} from 'framer-motion'
import { useState } from "react"



const Navbar = () => {
const [toggle, setToggle ] = useState(false)


    
  return (
    <nav className="w-full flex justify-between items-center py-[1rem] fixed z-50  
        border border-gray-100 backdrop-blur-sm px-[2rem] bg-[rgba(255,255,255,0.25)] ">
      
        <div className="flex justify-start items-center">
             <img src={images.logo.src} alt="" className="w-[100px] h-[40px] lg:w-[200px] lg:h-[50px]" />
        </div>


      <ul className=" flex-1 md:flex justify-center items-center hidden">
        {['home', 'about', 'contact', 'work', 'skill'].map((link, index) => (
          <li key={index} className="group cursor-pointer flex-col  flex justify-center items-center my-0 mx-[1rem]">
              <div className="w-[5px] group-hover:bg-[#313bac] h-[5px] bg-transparent rounded-full mb-[5px]" />
              <Link href={`#${link}`}>
                <a href="" className=" transition-all ease-in-out hover:text-[#313bac] text-[#6b7688] flex-col uppercase font-[500]">
                    {link}
                </a>
              </Link>
          </li>
        ) )}
      </ul>

      <div className="">
          <div className="w-[35px] h-[35px] rounded-full bg-[#313bac] flex items-center justify-center md:hidden">
                <HiMenuAlt4
                 className="text-white w-[70%] h-[70%]" 
                onClick={() => setToggle(true)}/>
          </div>
         

          {
            toggle && (
              <motion.div 
                className="fixed top-0 bottom-0 right-0 z-50 w-[70%] h-[80vh] 
                flex justify-end items-end bg-[url('/bgWhite.png')] md:hidden
                bg-[#ffffff] bg-cover bg-repeat shadow-lg flex-col"
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.85, ease:'easeInOut'}}>
                  
                  <HiX
                    className="w-[35px] h-[35px] text-[#313bac]"
                    onClick={() => setToggle(false)}
                  />

                  <ul className="m-0 p-0 h-full w-full flex flex-col justify-start items-start">
                    {['home', 'about', 'contact', 'work', 'skkill'].map((link, index) => (
                      <li key={index} className="m-[1rem]">
                          <Link href={`#${link}`} onClick={() => setToggle(true)}>
                            <a href="" className="text-[#6b7688] uppercase font-[1rem] font-[500] 
                              transition-all ease-in-out hover:text-[#313bac]"  
                              onClick={() => setToggle(true)}>
                                {link}
                            </a>
                          </Link>
                      </li>
                    ) )}
                  </ul>
                  
              </motion.div>
            )
          }
      </div>
    </nav>
  )
}

export default Navbar