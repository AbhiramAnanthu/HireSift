import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div className="bg-light text-dark py-5" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">Welcome to HireSift</h1>
            <p className="lead">
              Simplify your hiring process with AI-powered resume filtering. Save time, reduce bias, and find the best candidates faster than ever.
            </p>
            <a href="#learn-more" className="btn btn-primary btn-lg">
              Learn More
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="https://cdn-dlofh.nitrocdn.com/TASgNozwGfEfVHakzcSlOaFmdxhUvEBv/assets/images/optimized/rev-9921c4c/gleematic.com/wp-content/uploads/2023/05/Screenshot-2023-05-03-at-00.01.59.png"
              alt="AI filtering resumes"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
