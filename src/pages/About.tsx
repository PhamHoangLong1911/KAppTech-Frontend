import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - KAppTech</title>
        <meta name="description" content="Learn about KAppTech's mission, vision, and expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About KAppTech</h1>
          <p className="text-lg text-gray-600">
            Coming soon - Learn about our mission, vision, and expert team.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
