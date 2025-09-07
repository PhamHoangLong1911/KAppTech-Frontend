import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - KAppTech</title>
        <meta name="description" content="Explore our comprehensive software development services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          <p className="text-lg text-gray-600">
            Coming soon - Detailed information about our software development services.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
