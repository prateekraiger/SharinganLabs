import { cn } from '../../lib/utils';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer border-none outline-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:scale-105 active:scale-95',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
    dark: 'bg-dark text-white hover:bg-dark/90 hover:scale-105',
    accent: 'bg-accent text-dark hover:bg-accent/90 hover:scale-105'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm rounded-lg',
    medium: 'px-6 py-3 text-base rounded-xl',
    large: 'px-8 py-4 text-lg rounded-2xl'
  };
  
  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
