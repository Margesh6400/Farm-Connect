import { motion } from 'framer-motion';
import React from 'react';
import { Users, Target, Globe, Shield, TrendingUp, MessageCircle } from 'lucide-react';

const AboutUsPage = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const missionPoints = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Empowering Farmers",
      description: "We provide farmers with direct market access and fair pricing opportunities to enhance their livelihoods."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Market Stability",
      description: "Creating a stable marketplace where farmers and buyers can establish long-term, mutually beneficial relationships."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connecting local farmers with nationwide buyers to expand market opportunities and increase profitability."
    }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Transparency",
      description: "Building trust through transparent pricing and verified contracts."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sustainable Growth",
      description: "Promoting sustainable farming practices and long-term business relationships."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Open Communication",
      description: "Facilitating direct communication between farmers and buyers for better understanding and collaboration."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.div 
        className="relative py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariant}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center"
            variants={fadeInUpVariant}
          >
            <motion.div
              className="w-20 h-2 bg-green-500 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              About Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a sustainable future for agriculture by connecting farmers directly with buyers through innovative technology.
            </p>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute w-96 h-96 bg-green-300 rounded-full blur-3xl -top-48 -left-48" />
            <div className="absolute w-96 h-96 bg-green-200 rounded-full blur-3xl -bottom-48 -right-48" />
          </motion.div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        className="py-20 bg-white/80 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariant}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={fadeInUpVariant}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-6 text-green-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {point.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-green-900 mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariant}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center text-green-900 mb-16"
            variants={fadeInUpVariant}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeInUpVariant}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-green-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        className="py-20 bg-green-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariant}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Growing Community</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Together, we're building a more sustainable and prosperous future for agriculture. Join thousands of farmers and buyers already benefiting from our platform.
          </p>
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={fadeInUpVariant}
          >
            <motion.button
              className="px-8 py-4 bg-white text-green-900 rounded-full font-semibold hover:bg-green-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register as Farmer
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register as Buyer
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;