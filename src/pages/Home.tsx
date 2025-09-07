import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaMobile, 
  FaCloud, 
  FaCogs, 
  FaUsers, 
  FaRocket,
  FaArrowRight,
  FaCheck,
  FaStar
} from 'react-icons/fa';

const Home: React.FC = () => {
  const services = [
    {
      icon: <FaCode className="text-blue-600" size={32} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
    },
    {
      icon: <FaMobile className="text-green-600" size={32} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
    },
    {
      icon: <FaCloud className="text-purple-600" size={32} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
    },
    {
      icon: <FaCogs className="text-orange-600" size={32} />,
      title: 'DevOps',
      description: 'Streamlined development workflows and automated deployments.',
    },
  ];

  const stats = [
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Years Experience', value: '8+' },
  ];

  const features = [
    'Expert development team',
    '24/7 project support',
    'Agile development process',
    'Quality assurance',
    'Transparent communication',
    'Competitive pricing',
  ];

  return (
    <>
      <Helmet>
        <title>KAppTech - Professional Software Development Outsourcing</title>
        <meta 
          name="description" 
          content="Transform your ideas into powerful digital products with KAppTech's expert software development outsourcing services. Web, mobile, cloud solutions, and more." 
        />
        <meta 
          name="keywords" 
          content="software development, outsourcing, web development, mobile apps, cloud solutions, DevOps" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Transform Your Ideas Into 
              <span className="block text-yellow-300">Digital Excellence</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed"
            >
              Partner with KAppTech for world-class software development outsourcing. 
              We deliver scalable, innovative solutions that drive your business forward.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact" 
                className="btn bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-4 font-semibold"
              >
                Start Your Project
                <FaRocket className="ml-2" size={18} />
              </Link>
              <Link 
                to="/portfolio" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
              >
                View Our Work
                <FaArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We provide comprehensive software development solutions tailored to your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:shadow-2xl"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose KAppTech?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions 
                that not only meet your requirements but exceed your expectations.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheck className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={20} />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">4.9/5 Client Rating</span>
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4">
                  "KAppTech delivered an exceptional web application that exceeded our expectations. 
                  Their team's expertise and communication throughout the project was outstanding."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">John Doe</div>
                    <div className="text-gray-600 text-sm">CEO, TechCorp Inc.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Next Project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
          >
            Let's discuss how we can help transform your ideas into successful digital products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="btn bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-4 font-semibold inline-flex items-center"
            >
              Get Free Consultation
              <FaUsers className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
