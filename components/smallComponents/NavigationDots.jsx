import Link from 'next/link'
import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
    {['home', 'about', 'work', 'skill',  'contact', 'testimonials'].map((link, index) => (
            <Link href={`#${link}`} key={index + link}>
            <a href="" className={`app__navigation-dot ${active === link ? "bg-[#313bac]" : {}}`}/>
            </Link>
        
      ) )}
    </div>
  )
}

export default NavigationDots