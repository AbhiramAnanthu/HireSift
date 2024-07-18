import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    job_title: '',
    job_description: '',
    starting_date: '',
    ending_date: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="job_title" className="col-sm-2 col-form-label">
            Job title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="job_title"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="job_description" className="col-sm-2 col-form-label">
            Job description
          </label>
          <div className="col-sm-10">
            <textarea
              type="text"
              className="form-control"
              id="job_description"
              value={formData.job_description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="starting_date" className="col-sm-2 col-form-label">
            Starting date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="starting_date"
              value={formData.starting_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="ending_date" className="col-sm-2 col-form-label">
            Ending date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="ending_date"
              value={formData.ending_date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
