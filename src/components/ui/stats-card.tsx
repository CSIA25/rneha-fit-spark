
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import AnimatedCounter from './animated-counter';

interface StatsCardProps {
  icon: ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

const StatsCard = ({ icon, value, label, prefix = '', suffix = '', delay = 0 }: StatsCardProps) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="text-4xl mb-4 flex justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {icon}
      </motion.div>
      <div className="text-3xl font-bold text-white mb-2">
        <AnimatedCounter 
          end={value} 
          prefix={prefix} 
          suffix={suffix}
          duration={2}
        />
      </div>
      <p className="text-white/80 font-medium">{label}</p>
    </motion.div>
  );
};

export default StatsCard;
