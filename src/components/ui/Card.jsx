import { cn } from '../../lib/utils';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 shadow-lg transition-all duration-300',
        hover && 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
