import React from 'react'
import { motion } from 'framer-motion'

interface StaggerListProps {
    children: React.ReactNode[]
    className?: string
    staggerDelay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
}

const StaggerList: React.FC<StaggerListProps> = ({
    children,
    className = "",
    staggerDelay = 0.1,
    direction = 'up'
}) => {
    const directionVariants = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: -20 },
        right: { x: 20 }
    }

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: staggerDelay
            }
        }
    }

    const itemVariants = {
        initial: {
            opacity: 0,
            ...directionVariants[direction]
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.04, 0.62, 0.23, 0.98]
            }
        }
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className={className}
        >
            {children.map((child, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    )
}

export default StaggerList
