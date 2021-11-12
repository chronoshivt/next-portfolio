import React from 'react'
import { motion } from 'framer-motion';

const variants = {
  hidden: {
    y: 20,
    opacity: 0,
    x: 0
  },
  visible: {
    y: 0,
    opacity:1,
     },
}


const Article = ({children}) => (
        <motion.div
        initial="hidden" animate="visible" 
        exit={{ opacity:0, y:20, x: -0}}
        variants={variants}
        transition={{ type:"easeInOut" , duration: 0.3}}
        style={{ position: 'relative'}}
        >
            {children}
        </motion.div>
    
)

export default Article
