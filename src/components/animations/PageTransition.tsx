import React from 'react'
import { motion } from 'framer-motion'

interface PageTransitionProps {
    children: React.ReactNode
    className?: string
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.04, 0.62, 0.23, 0.98]
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3
        }
    }
}

const PageTransition: React.FC<PageTransitionProps> = ({
    children,
    className = ""
}) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition
