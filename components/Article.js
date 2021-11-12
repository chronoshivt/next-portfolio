import React from 'react'
import { motion } from 'framer-motion';

const Article = ({children}) => {
    return (
        <motion.div
        initial="hidden" animate="visible" 
        variants={{
          hidden: {
            y: 20,
            opacity: 0
          },
          visible: {
            y: 0,
            opacity:1,
            animate:{
              opacity: 0,
            },
            transition: {
              duration: .4,
              ease: "easeInOut"
            }
          },
          exit: {
            opacity: 0,
            y:20,
          }
        }}
        >
            {children}
        </motion.div>
    )
}

export default Article
