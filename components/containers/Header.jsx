import {motion} from 'framer-motion'
import images from '../../assets/Imagies'
import {AppWrap} from '../wrapper'



const scaleVariants = {
  whileInView : {
    scale:[0,1],
    opacity:[0,1],
    transition: {
      duration:1,
      ease:"easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div id='home' className="flex justify-center bg-[url('/bgIMG.png')] relative
       bg-cover bg-repeat bg-center flex-1  w-full h-full flex-col pt-[6rem] pb-4
       lg:pt-[8rem] md:flex-row">
       
        <motion.div
          whileInView={{x:[-100,0], opacity:[0,1]}}
          transition={{duration:0.5}}
          className="flex-[0.65] flex flex-col justify-start items-start h-[100%]
          lg:w-full mr-[0rem]">

            <div className="w-full flex justify-end items-end flex-col space-y-4 md:justify-start lg:items-start">
                <div className="flex justify-center items-center
                py-[1rem] px-[2rem] flex-row shadow-xl w-auto border-white rounded-lg">
                  <span className='text-[2.5rem] lg:text-[5rem]'>👋</span>
                  <div className="ml-[20px]">
                      <p className="text-[0.8rem] text-left md:text-[2rem] text-[#6b7688]">Hello, I am</p>
                      <h1 className="text-[2.75rem] text-[800] text-center text-[#030303] capitalize md:text-[rem]">
                      Wisdom</h1>
                  </div>
                </div>

                <div className="flex justify-center items-center flex-col 
                py-[1rem] px-[2rem]  shadow-xl w-auto border-white rounded-lg">
                    <p className="p_tag">Web Developer</p>
                    <p className="p_tag">Freelancer</p>
                </div>
            </div>

        </motion.div> 
        
        <motion.div
            whileInView={{ opacity:[0,1]}}
            transition={{duration:0.5, delayChildren:0.5}}
            className="app__header-img">
            <motion.img
                whileInView={{scale:[0,1]}}
                transition={{duration:1, ease:"easeInOut"}}
                src={images.circle.src}
                className="overlay_circle" 
              />
              <img src={images.profile.src} alt="" className='' />

        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"  
        >
           {[images.react.src, images.node.src, images.javascript.src].map((circle, index) => (
                <div className="app__flex circle-cmp" key={index}>
                  <img src={circle} alt="circle" />
                </div>
           ))}
        </motion.div>
    </div>
  )
}

export default Header