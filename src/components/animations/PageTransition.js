import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
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
};
const PageTransition = ({ children, className = "" }) => {
    return (_jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants: pageVariants, className: className, children: children }));
};
export default PageTransition;
