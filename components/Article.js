import React from 'react'
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1]

const variants = {
  hidden: {
    y: 12,
    opacity: 0,
    filter: 'blur(6px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease },
  },
  exit: {
    y: -8,
    opacity: 0,
    filter: 'blur(4px)',
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}


const Article = ({children}) => (
        <motion.div
        initial="hidden" animate="visible" exit="exit"
        variants={variants}
        style={{ position: 'relative', width: '100%' }}
        >
            {children}
        </motion.div>

)

export default Article
