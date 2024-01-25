"use client";
import Link from "next/link";
import { useState } from "react";
import AnimatedLink from "./AnimatedLink";
import {AnimatePresence, motion} from 'framer-motion'
const Navbar = () => {
  const navlinks = [
    { title: "About Me", href: "/About" },
    { title: "Education", href: "/Education" },
    { title: "Project", href: "/Project" },
    { title: "Blog", href: "/Blog" },
    { title: "Contact", href: "/Contact" },
  ];
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  //this is for the whole menu
  const menuvariant={
    initial:{scaleY:0},//menu will be at top if we put it at y0
    animate:{
        scaleY:1,
        transition:{
            duration: 0.5,
            ease:[0.12,0,0.39,0]
        }
    },//will bring to original height which is given below
    exit:{
        scaleY:0,
        transition:{
            duration: 0.5,
            ease:[0.22,1,0.36,1],
            delay:0.5
                }
    },
}
//the below initial is for leave and
//the open is when it open
//this is for coming one by one
const containervar={
  initial:{
    transition:{
    staggerChildren:0.09,
    staggerDirection:-1
  }},
  open:{
    transition:{
      delayChildren:0.3,
      staggerChildren:0.09,
      staggerDirection:1
    }
  }
}
  return (
    <header>
      <nav className=" flex justify-between items-center py-8 lg:py-4 px-2">
        <div className=" flex items-center gap-[1ch]">
          <div className=" w-5 h-5 bg-yellow-400 rounded-full" />
          <span className=" text-sm font-semibold tracking-widest">
            TENZIN DELEK
          </span>
        </div>

        <div className=" lg:flex hidden gap-12 text-md text-zinc-400">
          {navlinks.map((link,i)=>{
            return(
              <div key={i}>
                <AnimatedLink link={link.title} key={i} route={link.href}/>
              </div>
            )
          })}
        </div>
        
        <div
          className=" cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </nav>
      {/*the animatepresence is a must for exit below is for mobile view*/}
      
        <AnimatePresence> 
      { open && (
        <motion.div 
        variants={menuvariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className=" fixed left-0 top-0 w-full h-screen bg-yellow-400 text-black p-10 origin-top"> {/* origin top is must or else it will start and end from center*/ }
        <div className=" flex h-full flex-col">
          <div className=" flex justify-between">
            <h1 className=" text-lg font-medium text-black ">TENZIN DELEK</h1>
            <p
              className=" cursor-pointer text-base text-black"
              onClick={toggleMenu}
            >
              Close
            </p>
          </div>

          <motion.div variants={containervar} exit="initial" initial="initial" animate="open" className=" flex flex-col justify-center h-full font-lora items-center gap-4">
            {navlinks.map((link, index) => {
              return (
                <div className=" overflow-hidden" key={index}> {/*makes it cutted like as it is coming from below */}
                <MobileNavLink
                  key={index}
                  title={link.title}
                  href={link.href}
                  toggleMenu={toggleMenu}
                />
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

 {/* will be at bottom that y:30vh  and the open 0 puts it back to its spot*/}
const moblinkvar={
initial:{y:"30vh",
transition:
{duration:0.5,
ease:[0.37,0,0.63,1]},
},
  open:{y:0,
    transition:{duration:0.7,ease:[0,0.55,0.45,1]}}
}
const MobileNavLink = ({ title, href ,toggleMenu}) => {
  
  const handleLinkClick = () => {
    toggleMenu();
  };
  return (
    <motion.div variants={moblinkvar}  className=" text-5xl uppercase text-black" onClick={handleLinkClick}>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
