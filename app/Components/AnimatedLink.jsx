'use client'
import { motion} from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
const AnimatedLink = ({link,route}) => {
  const [ishover,setishover]=useState(false)
  return (
    <motion.div onMouseEnter={()=> setishover(true)} onMouseLeave={()=>setishover(false)} className=' relative overflow-hidden cursor-pointer flex flex-col'>
    <AnimatedWord  ishover={ishover} link={link} animation={lettervar} route={route} />
    <div className=' absolute top-0'>
    <AnimatedWord ishover={ishover} link={link} animation={lettervartwo} route={route} />
    </div>
    </motion.div>
  )
}

export default AnimatedLink
const titleanimation={
  rest:{
    transition:{
      staggerChildren:0.003
    }
  },
  hover:{
    transition:{
      staggerChildren:0.003
    }
  }
}
const lettervar={
  rest:{
    y:0 // start at orginal point
  },
  hover:{
    y:-25, // hover up
    transition:{
      duration:0.3,
      ease:[0.6,0.01,0.05,0.95],
      type:"tween",
    }
  }
}
const lettervartwo={
  rest:{
    y:25 
  },
  hover:{
    y:0 ,
    transition:{
      duration:0.3,
      ease:[0.6,0.01,0.05,0.95],
      type:"tween",
    }
  }
}
const AnimatedWord=({link,animation,ishover,route})=>{
  return (
    <motion.span
    variants={titleanimation}
    initial="rest"
    animate={ishover ? "hover" : "rest"}
    className="whitespace-nowrap relative"
  >
    {/* <motion.span variants={animation} className='relative inline-block whitespace-nowrap'>
          <Link href={route}  className=' text-[#393632]'>{link}</Link>  
          </motion.span> */}
    {link.split('').map((char, i) => (
      <span key={char + i}>
        {char === ' ' ? (
          <span>&nbsp;</span>
        ) : (
          <motion.span variants={animation} className='relative inline-block whitespace-nowrap'>
          <Link href={route}  className=' text-[#393632]'>{char}</Link>  
          </motion.span>
        )}
      </span>
    ))}
  </motion.span>
  )
}