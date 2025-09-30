import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
const Card = React.forwardRef(({ className, children, hover = false, padding = 'md', ...props }, ref) => {
    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };
    const CardComponent = hover ? motion.div : 'div';
    const motionProps = hover ? {
        whileHover: { y: -5, scale: 1.02 },
        transition: { duration: 0.2 }
    } : {};
    return (_jsx(CardComponent, { ref: ref, className: cn("bg-white rounded-lg border border-gray-200 shadow-sm", paddingStyles[padding], hover && "cursor-pointer transition-shadow duration-200 hover:shadow-lg", className), ...motionProps, ...props, children: children }));
});
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 pb-4", className), ...props, children: children })));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, children, as: Component = 'h3', ...props }, ref) => (_jsx(Component, { ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props, children: children })));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, children, ...props }, ref) => (_jsx("p", { ref: ref, className: cn("text-sm text-gray-600", className), ...props, children: children })));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("text-sm", className), ...props, children: children })));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex items-center pt-4", className), ...props, children: children })));
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
