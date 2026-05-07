// src/components/ui/Input.tsx
import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, type = 'text', ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              'w-full rounded-xl bg-input-background border border-border text-foreground',
              'placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary',
              'transition-all duration-200',
              icon ? 'pl-11 pr-4 py-3' : 'px-4 py-3',
              error && 'border-destructive focus:ring-destructive',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-xs text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };