import React, { useState } from 'react'
import { AppWrap } from '../wrapper'
import {motion} from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import images from '../../assets/Imagies'

const skillList = [
      {
        name:'Git',
        bgColor:"",
        icon: images.git.src
      },
      {
        name:'Node JS',
        bgColor:"",
        icon: images.node.src
      },
      {
        name:'React Js',
        bgColor:"",
        icon: images.react.src
      },
      {
        name:'JavaScript',
        bgColor:"",
        icon: images.javascript.src
      },
      {
        name:'CSS',
        bgColor:"",
        icon: images.css.src
      },
      {
        name:'HTML',
        bgColor:"",
        icon: images.html.src
      },
      
]

const Skills = () => {

  const [skills, setSkills] = useState([...skillList])
  const [experiences, setExperiences] = useState()
  return (
    <div>
    <h2 className="head-text">Skills & Experience </h2>
      <div className="app__skills-container"> 
          <motion.div className='app__skills-list'>
              {skills.map((skill, index) => (
                <motion.div
                  whileInView={{opacity:[0,1]}}
                  transition={{duration:0.5}}
                  className='app__skills-item app__flex'
                  key={index}>
                    <div className={`app__flex bg-[${skill.bgColor}]`}>
                      <img src={skill.icon} alt={skill.name} className="" />
                   
                    </div>
                    <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
          </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Skills, "skill")