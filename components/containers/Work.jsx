import React,{useState} from 'react'
import { AppWrap } from '../wrapper'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import imagies from '../../assets/Imagies'
import Link from 'next/link'

const works = [
    {title:'Morden UI/UX website', 
    dis:'A Morden UI/UX portfolio website ', 
    projectLink:'', 
    codeLink:'', 
    img:imagies.about01.src,
    tag:['UI/UX', 'All']
    },
    {title:'Morden UI/UX website', 
    dis:'A Morden UI/UX portfolio website ', 
    projectLink:'', 
    codeLink:'', 
    img:imagies.about02.src,
    tag:['UI/UX', 'All']
    },
    {title:'Morden UI/UX website', 
    dis:'A Morden UI/UX portfolio website ', 
    projectLink:'', 
    codeLink:'', 
    img:imagies.about03.src,
    tag:['UI/UX', 'All']
    },
    {title:'Morden UI/UX website', 
    dis:'A Morden UI/UX portfolio website ', 
    projectLink:'', 
    codeLink:'', 
    img:imagies.about04.src,
    tag:['web App', 'All']
    }
]

const Work = () => {

    const [activeFilter, setActiveFilter] = useState('All')
    const [filterWork, setFilterWork] = useState([...works])
    const [animateCard, setAnimateCard] = useState([{y:0, opecity: 1}])

    
    const handleWorkFilter = (item) => {
        setActiveFilter(item)
        setAnimateCard([{y:100, opecity:0}])

        setTimeout(() => {
            setAnimateCard([{y:0, opecity:1}])
            if(item === 'All'){
                setFilterWork([...works])
            }else{
                
                 setFilterWork(works.filter((item) => item.tag.includes(item)))
            }
        },500)
    }


  return (
    <div>
        <h2 className="head-text">My Creative 
        <span> Portfolio</span> Setion
        </h2>

        <div className="app__work-filter">
            {['UI/UX', 'web App', 'Mobile App', 'React Js', 'All']
            .map((item, index) => (
                <div className={`app__work-filter-item app__flex p-text
                    ${activeFilter === item ? 'item-active': ''}`} 
                     key={index} 
                     onClick={() => handleWorkFilter(item)}>
                    {item}
                </div>
            ))}
        </div>

        <motion.div
            animate={animateCard}
            transition={{duration:0.5, delayChildren:0.5}}
            className="app__work-portfolio" >
                {filterWork.map((item, index) => (
                    <div key={index} className="app__work-item app__flex">
                        <div className="app__work-img app__flex">
                            <img src={item.img} alt="" />

                            <motion.div
                                whileHover={{opecity:[0,1]}}
                                transition={{duration:0.25, ease:'easeInOut', staggerChildren:0.5}}
                                className="app__work-hover app__flex">
                                    <Link href={item.projectLink}>
                                        <a href="" target='_blank' rel="noreferrer">
                                            <motion.div 
                                                whileInView={{scale:[0,1]}}
                                                whileHover={{scale:[1 ,0.9]}}
                                                transition={{duration:0.25}}
                                                className="app__flex">
                                                    <AiFillEye/>
                                            </motion.div>
                                        </a>
                                    </Link>

                                    <Link href={item.codeLink}>
                                        <a href="" target='_blank' rel="noreferrer">
                                            <motion.div 
                                                whileInView={{scale:[0,1]}}
                                                whileHover={{scale:[1 ,0.9]}}
                                                transition={{duration:0.25}}
                                                className="app__flex">
                                                    <AiFillGithub/>
                                            </motion.div>
                                        </a>
                                    </Link>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{item.title}</h4>
                            <p className="p-text mt-[10px]"> {item.dis}</p> 

                            <div className="app__work-tag app__flex">
                                <p className="p-text">{item.tag[0]}</p>
                            </div>
                        </div>

                    </div>
                ))}
        </motion.div>
    </div>
  )
}

export default AppWrap(Work, 'work')