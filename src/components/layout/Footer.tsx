import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaArrowUp 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <span className="text-xl font-bold">KAppTech</span>
                <div className="text-sm text-gray-400">Software Outsourcing</div>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Delivering exceptional software development solutions through expert outsourcing services. 
              Transform your ideas into powerful digital products with our experienced team.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services#web-development" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#mobile-development" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#cloud-solutions" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#devops" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  DevOps
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#consulting" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <a 
                  href="mailto:contact@kapptech.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  contact@kapptech.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-400">
                  123 Business Ave<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} KAppTech. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link 
                  to="/privacy" 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
