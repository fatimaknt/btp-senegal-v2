import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'
import Button from './Button'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    showCloseButton?: boolean
    closeOnOverlayClick?: boolean
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
    showCloseButton = true,
    closeOnOverlayClick = true
}) => {
    const sizeStyles = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-full mx-4'
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "relative w-full bg-white rounded-lg shadow-xl",
                            sizeStyles[size]
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {(title || showCloseButton) && (
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                {title && (
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {title}
                                    </h3>
                                )}
                                {showCloseButton && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={onClose}
                                        className="p-2"
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        )}

                        <div className="p-6">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

interface ModalHeaderProps {
    children: React.ReactNode
    className?: string
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => (
    <div className={cn("mb-4", className)}>
        {children}
    </div>
)

interface ModalBodyProps {
    children: React.ReactNode
    className?: string
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => (
    <div className={cn("mb-6", className)}>
        {children}
    </div>
)

interface ModalFooterProps {
    children: React.ReactNode
    className?: string
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => (
    <div className={cn("flex justify-end space-x-3 pt-4 border-t border-gray-200", className)}>
        {children}
    </div>
)

export { Modal, ModalHeader, ModalBody, ModalFooter }
