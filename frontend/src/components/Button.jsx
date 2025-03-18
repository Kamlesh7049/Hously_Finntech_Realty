import React from 'react';

export function Button({ children, variant = 'default', className = '', ...props }) {
    let baseClass = 'px-4 py-2 rounded-md text-sm font-medium transition duration-200';

    switch (variant) {
        case 'primary':
            baseClass += ' bg-blue-600 text-white hover:bg-blue-700';
            break;
        case 'ghost':
            baseClass += ' bg-transparent text-gray-700 hover:bg-gray-200';
            break;
        case 'danger':
            baseClass += ' bg-red-600 text-white hover:bg-red-700';
            break;
        default:
            baseClass += ' bg-gray-100 text-gray-900 hover:bg-gray-200';
    }

    return (
        <button className={`${baseClass} ${className}`} {...props}>
            {children}
        </button>
    );
}
