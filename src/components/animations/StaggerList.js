import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const StaggerList = ({ children, className = "", staggerDelay = 0.1, direction = 'up' }) => {
    const directionVariants = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: -20 },
        right: { x: 20 }
    };
    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: staggerDelay
            }
        }
    };
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
    };
    return (_jsx(motion.div, { initial: "initial", animate: "animate", variants: containerVariants, className: className, children: children.map((child, index) => (_jsx(motion.div, { variants: itemVariants, children: child }, index))) }));
};
export default StaggerList;
