import { motion } from 'framer-motion'
import React from 'react'
import images from '../../assets/Imagies'
import {urlFor, client} from '../sanity/client'
import { AppWrap } from '../wrapper'

const About = ({data}) => {
  console.log(data)
  const about = [
    {
      title:'Web Development',
      description:'I am a good web developer',
      image:images.about01.src
    },
    {
      title:'Web Design',
      description:'I am a good web developer',
      image:images.about02.src
    },
    {
      title:'Web ui/ux',
      description:'I am a good web developer',
      image:images.about03.src
    },
    {
      title:'Web ui/ux',
      description:'I am a good web developer',
      image:images.about04.src
    }
  ]
  return (
    <>
      <h2 className="head-text">I Know That 
        <span> Good Desigen</span> <br/> means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
          {
            about.map((about, index) => (
              <motion.div
                whileInView={{opacity: 1}}
                whileHover={{scale:1.1}}
                transition={{duration:0.5, type:'tween'}}
                className="app__profile_item"
                key={index}>

                <img src={about.image} alt={about.title} className="" />
                <h2 className='bold-text mt-[20px]'>{about.title}</h2>
                <p className='p-text mt-[10px]'>{about.description}</p>
                </motion.div>
            ))
          }
      </div>
    </>
  )
}

export default AppWrap(About, 'about') 

export async function getStaticProps() {
 
   const query = '+[_type == "about"]'
  
  const data = await client.fetch(query)
  
 
  
  return {
     props:  data  
    }
}

