import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PromptForm from "./promptForm";
import axios from "axios";

function WorkSpace() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [jobDetails, setJobDetails] = useState([]);
  const [applicantDetail, setApplicantDetails] = useState([]);
  const location = useLocation();
  const path = location.search;
  let job_id = path.slice(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const candidate_response = await axios.get(
          `http://localhost:8000/candidates/?job_id=${job_id}`
        );
        setApplicantDetails(candidate_response.data);
        const job_response = await axios.get(
          `http://localhost:8000/jobs/?job_id=${job_id}`
        );
        setJobDetails(job_response.data);
      } catch (error) {
        console.log("error getting data: ", error);
      }
    };
    getData();
  }, [job_id]);

  const getpdf = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/download-files/?applicant_number=${id}`,
        {
          method: "GET",
          headers: {
            "content-Type": "application/pdf",
          },
        }
      );
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
        window.open(url, "__blank", "noopener,noreferrer");
      } else {
        console.log("error getting pdf file");
      }
    } catch (error) {
      console.log("error getting file: ", error);
    }
  };

  const handleClick = (e, id) => {
    getpdf(e, id);
  };

  return (
    <>
      <div className="container mt-5">
        <header className="text-center mb-4">
          <h1 className="display-4 text-dark">
            Welcome, shall we start hiring?
          </h1>
        </header>

        {jobDetails.map((job, index) => (
          <section className="mb-4" key={index}>
            <h3 className="mb-3 text-dark">Job Details</h3>
            <div className="card p-3 mb-3  bg-transparent text-dark shadow">
              <p>
                <strong>Job Title:</strong> {job.job_title}
              </p>
              <p>
                <strong>Job ID:</strong> {job.job_id}
              </p>
              <p>
                <strong>Number of Applicants Applied:</strong>{" "}
                {applicantDetail.length}
              </p>
            </div>
          </section>
        ))}
        <h3 className="mb-3 text-dark">Applicant Details</h3>
        {applicantDetail.map((applicant, index) => (
          <section key={index} className="mb-4">
            <div className="card p-3  bg-transparent text-dark shadow">
              <p>
                <strong>Applicant Name:</strong>{" "}
                {`${applicant.first_name} ${applicant.last_name}`}
              </p>
              <p>
                <strong>Applicant Id:</strong> {applicant.application_number}
              </p>
              <p>
                <strong className="mr-2">Resume:</strong>
                <button
                  onClick={(e) => handleClick(e, applicant.application_number)}
                  type="button"
                  className="btn btn-link text-dark"
                >
                  View Resume
                </button>
              </p>
            </div>
          </section>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-dark p-3 mb-1"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Start Filtering
        </button>
      </div>
      <PromptForm id={job_id}/>
    </>
  );
}

export default WorkSpace;
