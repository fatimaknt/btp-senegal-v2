import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from './Button';
const Modal = ({ isOpen, onClose, title, children, size = 'md', showCloseButton = true, closeOnOverlayClick = true }) => {
    const sizeStyles = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-full mx-4'
    };
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4", onClick: handleOverlayClick, children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, transition: { duration: 0.2 }, className: cn("relative w-full bg-white rounded-lg shadow-xl", sizeStyles[size]), onClick: (e) => e.stopPropagation(), children: [(title || showCloseButton) && (_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [title && (_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: title })), showCloseButton && (_jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, className: "p-2", children: _jsx(X, { className: "h-4 w-4" }) }))] })), _jsx("div", { className: "p-6", children: children })] }) })) }));
};
const ModalHeader = ({ children, className }) => (_jsx("div", { className: cn("mb-4", className), children: children }));
const ModalBody = ({ children, className }) => (_jsx("div", { className: cn("mb-6", className), children: children }));
const ModalFooter = ({ children, className }) => (_jsx("div", { className: cn("flex justify-end space-x-3 pt-4 border-t border-gray-200", className), children: children }));
export { Modal, ModalHeader, ModalBody, ModalFooter };
