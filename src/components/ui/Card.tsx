import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    hover?: boolean
    padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hover = false, padding = 'md', ...props }, ref) => {
        const paddingStyles = {
            none: '',
            sm: 'p-4',
            md: 'p-6',
            lg: 'p-8'
        }

        const CardComponent = hover ? motion.div : 'div'
        const motionProps = hover ? {
            whileHover: { y: -5, scale: 1.02 },
            transition: { duration: 0.2 }
        } : {}

        return (
            <CardComponent
                ref={ref}
                className={cn(
                    "bg-white rounded-lg border border-gray-200 shadow-sm",
                    paddingStyles[padding],
                    hover && "cursor-pointer transition-shadow duration-200 hover:shadow-lg",
                    className
                )}
                {...motionProps}
                {...props}
            >
                {children}
            </CardComponent>
        )
    }
)

Card.displayName = "Card"

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 pb-4", className)}
            {...props}
        >
            {children}
        </div>
    )
)

CardHeader.displayName = "CardHeader"

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, children, as: Component = 'h3', ...props }, ref) => (
        <Component
            ref={ref}
            className={cn("text-lg font-semibold leading-none tracking-tight", className)}
            {...props}
        >
            {children}
        </Component>
    )
)

CardTitle.displayName = "CardTitle"

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, children, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-gray-600", className)}
            {...props}
        >
            {children}
        </p>
    )
)

CardDescription.displayName = "CardDescription"

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("text-sm", className)}
            {...props}
        >
            {children}
        </div>
    )
)

CardContent.displayName = "CardContent"

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center pt-4", className)}
            {...props}
        >
            {children}
        </div>
    )
)

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
