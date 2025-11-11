import { cn } from "../../lib/utils";
import "./Button.css";

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses = {
  primary:
    "text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 shadow-lg shadow-purple-500/50",
  secondary:
    "text-white glass-light border border-cyan-500/30 hover:border-cyan-500/60",
  accent:
    "text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 shadow-lg shadow-purple-500/50",
  ghost:
    "text-white/90 hover:text-white glass-light border border-purple-500/30 hover:border-purple-500/60",
  default:
    "text-white bg-purple-600 hover:bg-purple-500 border border-purple-500/40",
};

const sizeClasses = {
  small: "h-9 px-4 text-sm",
  medium: "h-10 px-5 text-base",
  large: "h-12 px-6 text-base md:text-lg",
};

export const Button = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size] || sizeClasses.medium,
        variantClasses[variant] || variantClasses.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
