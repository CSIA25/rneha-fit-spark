
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const GradientButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false 
}: GradientButtonProps) => {
  const baseClasses = "relative overflow-hidden rounded-2xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const gradientClasses = {
    primary: "gradient-primary text-white hover:shadow-lg hover:shadow-teal-500/25",
    secondary: "gradient-secondary text-white hover:shadow-lg hover:shadow-orange-500/25"
  };

  return (
    <motion.button
      className={`${baseClasses} ${sizeClasses[size]} ${gradientClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
        whileHover={{ opacity: 0.1 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GradientButton;
