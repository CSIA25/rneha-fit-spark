
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import GradientButton from '../ui/gradient-button';

const Services = () => {
  const services = [
    {
      icon: "💪",
      title: "Personal Training",
      description: "One-on-one customized workout sessions tailored to your goals and fitness level",
      features: [
        "Personalized workout plans",
        "Form correction & technique",
        "Progress tracking",
        "Flexible scheduling"
      ],
      price: "₹2,500",
      duration: "per session",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: "👥",
      title: "Group Sessions",
      description: "High-energy group workouts that build community while achieving fitness goals",
      features: [
        "Small group training",
        "Motivational environment",
        "Cost-effective",
        "Social accountability"
      ],
      price: "₹800",
      duration: "per session",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: "🥗",
      title: "Nutrition Coaching",
      description: "Comprehensive nutrition guidance and meal planning for optimal results",
      features: [
        "Custom meal plans",
        "Macro tracking",
        "Supplement guidance",
        "Lifestyle integration"
      ],
      price: "₹3,000",
      duration: "per month",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "🏠",
      title: "Virtual Training",
      description: "Live online sessions and workout programs you can do from anywhere",
      features: [
        "Live video sessions",
        "On-demand workouts",
        "Equipment alternatives",
        "Progress monitoring"
      ],
      price: "₹1,500",
      duration: "per session",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "📊",
      title: "Transformation Program",
      description: "Comprehensive 12-week program combining training, nutrition, and lifestyle coaching",
      features: [
        "Complete transformation plan",
        "Weekly check-ins",
        "Body composition analysis",
        "Lifestyle coaching"
      ],
      price: "₹25,000",
      duration: "12 weeks",
      gradient: "from-emerald-500 to-teal-500",
      popular: true
    },
    {
      icon: "🧘",
      title: "Wellness Coaching",
      description: "Holistic approach to health including stress management and recovery protocols",
      features: [
        "Stress management",
        "Sleep optimization",
        "Recovery protocols",
        "Mindfulness training"
      ],
      price: "₹2,000",
      duration: "per session",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Premium Fitness
            <span className="gradient-text"> Services</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Choose from our comprehensive range of fitness services designed to meet 
            your unique needs and help you achieve lasting results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 card-hover">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mx-auto mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <span className="text-teal-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-1">
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {service.duration}
                    </div>
                  </div>

                  <GradientButton 
                    variant={service.popular ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Choose Plan
                  </GradientButton>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Not sure which service is right for you?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Book a free consultation call to discuss your goals and find the perfect 
            fitness solution tailored to your needs and lifestyle.
          </p>
          <GradientButton size="lg" variant="primary">
            Book Free Consultation
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
