import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../lib/utils';
const Input = React.forwardRef(({ className, type = 'text', label, error, leftIcon: LeftIcon, rightIcon: RightIcon, onRightIconClick, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: inputId, className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsxs("div", { className: "relative", children: [LeftIcon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(LeftIcon, { className: "h-5 w-5 text-gray-400" }) })), _jsx("input", { id: inputId, type: type, className: cn("block w-full rounded-md border-gray-300 shadow-sm transition-colors duration-200", "focus:border-primary focus:ring-primary focus:ring-1", "placeholder:text-gray-400", LeftIcon && "pl-10", RightIcon && "pr-10", error && "border-red-500 focus:border-red-500 focus:ring-red-500", className), ref: ref, ...props }), RightIcon && (_jsx("div", { className: cn("absolute inset-y-0 right-0 pr-3 flex items-center", onRightIconClick ? "cursor-pointer" : "pointer-events-none"), onClick: onRightIconClick, children: _jsx(RightIcon, { className: "h-5 w-5 text-gray-400" }) }))] }), error && (_jsx("p", { className: "mt-1 text-sm text-red-600", children: error }))] }));
});
Input.displayName = "Input";
export default Input;
