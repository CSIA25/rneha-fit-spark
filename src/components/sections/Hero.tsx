
import { motion } from 'framer-motion';
import GradientButton from '../ui/gradient-button';
import StatsCard from '../ui/stats-card';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Transform Your
                <span className="block gradient-text">
                  Fitness Journey
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join <span className="text-teal-400 font-semibold">Ms. Rneha Rawal</span>, 
              your premier fitness coach, and unlock your potential with personalized 
              training programs designed for lasting results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <GradientButton size="lg" variant="primary">
                Start Your Journey
              </GradientButton>
              <GradientButton size="lg" variant="secondary">
                Book Consultation
              </GradientButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <StatsCard
                icon="💪"
                value={500}
                suffix="+"
                label="Clients Transformed"
                delay={1}
              />
              <StatsCard
                icon="🏆"
                value={5}
                label="Years Experience"
                delay={1.2}
              />
              <StatsCard
                icon="⭐"
                value={98}
                suffix="%"
                label="Success Rate"
                delay={1.4}
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Fitness Elements */}
          <motion.div
            className="h-[600px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-violet-500/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
              {/* Animated Dumbbell Icon */}
              <motion.div
                className="text-9xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🏋️‍♀️
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full p-4 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl">🔥</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-4 shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="text-2xl">💯</span>
            </motion.div>

            <motion.div
              className="absolute top-20 -left-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 shadow-xl"
              animate={{ 
                x: [0, 15, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-xl">💪</span>
            </motion.div>

            <motion.div
              className="absolute bottom-32 -right-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-3 shadow-xl"
              animate={{ 
                x: [0, -15, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              <span className="text-xl">🎯</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
