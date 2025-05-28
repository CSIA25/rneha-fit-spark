
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import GradientButton from '../ui/gradient-button';

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Client Portal", href: "/dashboard" },
    { name: "Trainer Dashboard", href: "/trainer" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Personal Training",
    "Group Sessions", 
    "Nutrition Coaching",
    "Virtual Training",
    "Transformation Program",
    "Wellness Coaching"
  ];

  const socialLinks = [
    { icon: "📘", name: "Facebook", href: "#" },
    { icon: "📷", name: "Instagram", href: "#" },
    { icon: "🐦", name: "Twitter", href: "#" },
    { icon: "💼", name: "LinkedIn", href: "#" },
    { icon: "📺", name: "YouTube", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay <span className="gradient-text">Motivated</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Get weekly fitness tips, nutrition advice, and exclusive content 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <GradientButton variant="primary">
                Subscribe
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-violet-500 flex items-center justify-center mr-3">
                <span className="text-2xl">💪</span>
              </div>
              <h4 className="text-2xl font-bold">FitCoach</h4>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your fitness journey with Ms. Rneha Rawal's personalized 
              coaching and proven training methods.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5 className="text-lg font-semibold mb-6">Contact</h5>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">📧</span>
                <div>
                  <p className="text-gray-300">rneha.fitcoach@email.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">📞</span>
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">
                    Elite Fitness Studio<br />
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">🕒</span>
                <div>
                  <p className="text-gray-300">
                    Mon-Sat: 6:00 AM - 10:00 PM<br />
                    Sunday: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FitCoach by Ms. Rneha Rawal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
