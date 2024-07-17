import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    startingDate: '',
    endingDate: ''
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
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="jobTitle" className="col-sm-2 col-form-label">
            Job title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="jobDescription" className="col-sm-2 col-form-label">
            Job description
          </label>
          <div className="col-sm-10">
            <textarea
              type="text"
              className="form-control"
              id="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="startingDate" className="col-sm-2 col-form-label">
            Starting date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="startingDate"
              value={formData.startingDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="endingDate" className="col-sm-2 col-form-label">
            Ending date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="endingDate"
              value={formData.endingDate}
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
