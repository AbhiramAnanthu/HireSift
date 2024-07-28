import React, { useState, useEffect } from "react";
import axios from "axios";

function JobHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/jobs/");
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error(`Error getting data: ${error}`);
      }
    };

    getData();
  }, []);
  return (
    <>
      <div className="row m-3">
        {data.map((job, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{job.job_title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{job.starting_date} - {job.ending_date}</h6>
                <p className="card-text">{job.job_description}</p>
               <a href={`/workspace?${job.job_id}`} className="card-link">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default JobHistory;
