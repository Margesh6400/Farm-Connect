import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

// Farm Illustration SVG Component
const FarmIllustration = () => (
  <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="none">
    <motion.path
      d="M40,160 L60,110 L160,110 L180,160"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M70,110 L100,60 L130,110"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
    />
    <motion.circle
      cx="100"
      cy="40"
      r="10"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </svg>
);

// Enhanced Social Media Button Component
const SocialButton = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
    whileHover={{ 
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      initial={false}
      animate={{ scale: [0.8, 1] }}
      transition={{ duration: 0.2 }}
    />
    <Icon className="w-5 h-5 text-green-600 group-hover:text-white relative z-10 transition-colors" />
    <span className="sr-only">{label}</span>
  </motion.a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="relative bg-gradient-to-b from-white to-green-50 pt-16 pb-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Animated Farm Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {['🌾', '🌱', '🚜', '🌿', '🍃', '🌺'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </motion.div>

        {/* Farm Illustration */}
        <FarmIllustration />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Newsletter Section */}
        <motion.div
          className="bg-green-600 rounded-2xl p-8 mb-16 relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="farm-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M0 0L10 10M10 0L0 10" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#farm-pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Stay Connected with FarmConnect</h3>
              <p className="text-green-50">Get the latest updates on market prices and farming tips</p>
            </div>
            <motion.form 
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <motion.button
                className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div 
            className="col-span-2 md:col-span-1"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="text-xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              FarmConnect
            </motion.h3>
            <p className="text-gray-600 mb-6">Empowering farmers with stable markets and reliable connections.</p>
            
            {/* Enhanced Social Media Links */}
            <div className="flex gap-4">
              <SocialButton 
                Icon={Facebook} 
                href="https://facebook.com/farmconnect" 
                label="Facebook"
              />
              <SocialButton 
                Icon={Twitter} 
                href="https://twitter.com/farmconnect" 
                label="Twitter"
              />
              <SocialButton 
                Icon={Instagram} 
                href="https://instagram.com/farmconnect" 
                label="Instagram"
              />
              <SocialButton 
                Icon={Linkedin} 
                href="https://linkedin.com/company/farmconnect" 
                label="LinkedIn"
              />
              <SocialButton 
                Icon={Youtube} 
                href="https://youtube.com/farmconnect" 
                label="YouTube"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          {[
            {
              title: "Company",
              links: ["About Us", "Careers", "Partners", "Contact"]
            },
            {
              title: "Services",
              links: ["For Farmers", "For Buyers", "Pricing", "Features"]
            },
            {
              title: "Resources",
              links: ["Blog", "News", "Help Center", "FAQs"]
            }
          ].map((column, idx) => (
            <motion.div
              key={column.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-600 hover:text-green-600 transition-colors inline-flex items-center gap-2"
                      whileHover={{ 
                        x: 5,
                        color: '#16a34a',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 py-8 border-t border-gray-200 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-green-600" />
            <span className="text-gray-600">contact@farmconnect.com</span>
          </div>
          <div className="text-gray-600">
            123 Farming Avenue, Agriculture District
          </div>
          <div className="text-gray-600">
            Phone: +1 (555) 123-4567
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} FarmConnect. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                  whileHover={{ 
                    scale: 1.05,
                    color: '#16a34a'
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;