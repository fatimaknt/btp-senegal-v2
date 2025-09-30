import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
const LoadingSpinner = ({ size = 'md', color = 'primary', className }) => {
    const sizeStyles = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };
    const colorStyles = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        white: 'text-white',
        gray: 'text-gray-500'
    };
    return (_jsx(motion.div, { className: cn('inline-block', sizeStyles[size], colorStyles[color], className), animate: { rotate: 360 }, transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
        }, children: _jsxs("svg", { className: "w-full h-full", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }) }));
};
export default LoadingSpinner;
