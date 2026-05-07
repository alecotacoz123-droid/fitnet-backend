// src/components/ui/Button.tsx

import { forwardRef, type ButtonHTMLAttributes } from 'react';

import { cn } from '../../../lib/utils';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'rounded-xl font-medium transition-all duration-200 inline-flex items-center justify-center',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // Variants
          variant === 'primary' &&
            'bg-blue-600 text-white hover:bg-blue-700',

          variant === 'secondary' &&
            'bg-gray-200 text-black hover:bg-gray-300',

          variant === 'destructive' &&
            'bg-red-600 text-white hover:bg-red-700',

          variant === 'ghost' &&
            'bg-transparent hover:bg-gray-100',

          // Sizes
          size === 'sm' && 'px-3 py-1.5 text-sm',

          size === 'md' && 'px-4 py-2 text-base',

          size === 'lg' && 'px-6 py-3 text-lg',

          className
        )}
        {...props}
      >
        {isLoading && (
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
              d="M4 12a8 8 0 018-8V0C5.373 
              0 0 5.373 0 12h4zm2 
              5.291A7.962 7.962 0 
              014 12H0c0 3.042 
              1.135 5.824 3 
              7.938l3-2.647z"
            />
          </svg>
        )}

        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };