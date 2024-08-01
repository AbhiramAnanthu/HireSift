import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function ApplicantDetail() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const id = searchParam.get("id");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/get-applicant-details/?id=${id}`
        );
        setData(JSON.parse(response.data));
      } catch (error) {
        console.log("error getting data", error);
      }
    };
    getData();
  }, [id]);

  const getPdf = async () => {
    try {
      const pd_response = await fetch(`http://localhost:8000/download-files/?applicant_number=${id}`);
      if (pd_response.ok) {
        const blob = await pd_response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, "__blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.log("error getting resume", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Candidate Details</h1>
      {data.map((person, index) => (
        <div key={index} className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{person.Name}</h5>
            <p className="card-text"><strong>ID:</strong> {person.id}</p>
            <p className="card-text"><strong>Phone No:</strong> {person.phone}</p>
            <p className="card-text"><strong>Email:</strong> {person.email}</p>
            <button onClick={getPdf} className="btn btn-dark btn-sm">
              View Resume
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicantDetail;
