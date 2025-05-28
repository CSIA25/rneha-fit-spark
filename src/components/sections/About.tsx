
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import GradientButton from '../ui/gradient-button';

const About = () => {
  const achievements = [
    {
      icon: "🎯",
      title: "Certified Trainer",
      description: "ACSM & NASM certified with specialized nutrition expertise"
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "500+ successful transformations with documented progress"
    },
    {
      icon: "🏅",
      title: "Award Winner",
      description: "Regional Fitness Coach of the Year 2023"
    },
    {
      icon: "💡",
      title: "Innovative Methods",
      description: "Cutting-edge training techniques and personalized nutrition"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "Rneha transformed not just my body, but my entire relationship with fitness. Down 30lbs and stronger than ever!",
      rating: 5,
      image: "💼"
    },
    {
      name: "Mike Chen",
      role: "Software Engineer",
      content: "The personalized approach and constant motivation kept me on track. Best investment I've made for my health.",
      rating: 5,
      image: "💻"
    },
    {
      name: "Lisa Martinez",
      role: "Teacher",
      content: "From struggling with consistency to making fitness a lifestyle. Rneha's guidance was game-changing.",
      rating: 5,
      image: "📚"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Your 
            <span className="gradient-text"> Fitness Expert</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            With over 5 years of dedicated experience, Ms. Rneha Rawal combines 
            scientific training methods with personalized care to help you achieve 
            sustainable fitness goals.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Coach Profile */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-teal-500 to-violet-500 rounded-3xl p-1">
                <div className="w-full h-full bg-gray-100 rounded-3xl flex items-center justify-center">
                  <span className="text-9xl">👩‍💪</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-3xl">🏆</span>
              </motion.div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ms. Rneha Rawal</h3>
              <p className="text-teal-600 font-semibold mb-4">Certified Personal Trainer & Nutrition Expert</p>
              <p className="text-gray-600 leading-relaxed">
                "I believe fitness is not just about physical transformation, but about 
                building confidence, discipline, and a healthier relationship with your body. 
                Every client's journey is unique, and I'm here to guide you every step of the way."
              </p>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Client <span className="gradient-text">Success Stories</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{testimonial.image}</div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GradientButton size="lg" variant="primary">
            Start Your Transformation Today
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
