import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CandidateForm() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-header">
              <h4>Candidate Form</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label htmlFor="firstName" className="col-sm-2 col-form-label">
                    First Name
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="firstName" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="lastName" className="col-sm-2 col-form-label">
                    Last Name
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="address" className="col-sm-2 col-form-label">
                    Address
                  </label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="address"></textarea>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="phone" className="col-sm-2 col-form-label">
                    Phone No
                  </label>
                  <div className="col-sm-10">
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="email" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="resume" className="col-sm-2 col-form-label">
                    Upload Resume
                  </label>
                  <div className="col-sm-10">
                    <input type="file" className="form-control" id="resume" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="essay" className="col-sm-2 col-form-label">
                    Write an essay for your application
                  </label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="essay"></textarea>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateForm;
