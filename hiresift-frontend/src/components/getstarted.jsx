import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GetStartedSection = () => {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container text-center">
        <h2 className="display-4">Ready to Get Started?</h2>
        <p className="lead">
          Discover the power of AI-driven resume filtering and streamline your hiring process today.
        </p>
        <a href="#get-started" className="btn btn-light btn-lg">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default GetStartedSection;
