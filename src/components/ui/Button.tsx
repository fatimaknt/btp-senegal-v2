import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    isLoading?: boolean
    leftIcon?: LucideIcon
    rightIcon?: LucideIcon
    children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        children,
        disabled,
        ...props
    }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
            secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
            outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
            ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
            destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600"
        }

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
            xl: "px-8 py-4 text-xl"
        }

        return (
            <motion.button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={disabled || isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {isLoading ? (
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                ) : LeftIcon ? (
                    <LeftIcon className="mr-2 h-4 w-4" />
                ) : null}

                {children}

                {RightIcon && !isLoading && (
                    <RightIcon className="ml-2 h-4 w-4" />
                )}
            </motion.button>
        )
    }
)

Button.displayName = "Button"

export default Button
