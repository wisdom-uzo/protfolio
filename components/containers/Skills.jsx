import React, { useState } from 'react'
import { AppWrap } from '../wrapper'
import {motion} from 'framer-motion'
//import ReactTooltip from 'react-tooltip'
import images from '../../assets/Imagies'
import ReactTooltip from 'react-tooltip'

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
const exp = [
  {
    year:'2021',
    work:[
      {name:'web-dev', compeny:'google', desc:'i work as a font frontend developer'}
    ]
  },
  {
    year:'2021',
    work:[
      {name:'web-dev', compeny:'google', desc:'i work as a font frontend developer'}
    ]
  }
]
const Skills = () => {

  const [skills, setSkills] = useState([...skillList])
  const [experiences, setExperiences] = useState(exp)

  console.log(experiences)
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

          <motion.div className='app__skills-exp'>
                {experiences?.map((exp, index) => (
                  <motion.div
                    className='app__skills-exp-item'
                    key={index}>
                      <div className="app__skills-exp-year">
                        <p className="bold-text">{exp.year}</p>
                      </div>

                      <motion.div
                        className='app__skills-exp-works'>
                          {exp?.work?.map((work, index) => (
                                 <>
                                  <motion.div
                                    whileInView={{opacity:[0,1]}}
                                    transition={{duration:0.5}}
                                    className='app__skills-exp-work app__flex'
                                    data-tip
                                    data-for={work.name}
                                    key={index}>
                                      <h4 className="bold-text">{work.name}</h4>
                                      <p className="p-text">{work.compeny}</p>
                                  </motion.div>
                                  <ReactTooltip
                                    id={work.name}
                                    effect='solid'
                                    arrowColor='#fff'
                                    className='skills-tooltip'>
                                      {work.desc}
                                  </ReactTooltip>
                                </>
                          ))}

                      </motion.div>
                  
                  </motion.div>
                ))}
  
          </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(Skills, "skill")   