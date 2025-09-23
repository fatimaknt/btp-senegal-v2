import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    leftIcon?: LucideIcon
    rightIcon?: LucideIcon
    onRightIconClick?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({
        className,
        type = 'text',
        label,
        error,
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        onRightIconClick,
        id,
        ...props
    }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    {LeftIcon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LeftIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    )}

                    <input
                        id={inputId}
                        type={type}
                        className={cn(
                            "block w-full rounded-md border-gray-300 shadow-sm transition-colors duration-200",
                            "focus:border-primary focus:ring-primary focus:ring-1",
                            "placeholder:text-gray-400",
                            LeftIcon && "pl-10",
                            RightIcon && "pr-10",
                            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />

                    {RightIcon && (
                        <div
                            className={cn(
                                "absolute inset-y-0 right-0 pr-3 flex items-center",
                                onRightIconClick ? "cursor-pointer" : "pointer-events-none"
                            )}
                            onClick={onRightIconClick}
                        >
                            <RightIcon className="h-5 w-5 text-gray-400" />
                        </div>
                    )}
                </div>

                {error && (
                    <p className="mt-1 text-sm text-red-600">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

Input.displayName = "Input"

export default Input
