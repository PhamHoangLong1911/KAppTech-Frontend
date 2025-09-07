import React from 'react';
import { Helmet } from 'react-helmet-async';

const Portfolio: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - KAppTech</title>
        <meta name="description" content="View our portfolio of successful software development projects." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Portfolio</h1>
          <p className="text-lg text-gray-600">
            Coming soon - Case studies and examples of our successful projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
