import { useState } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function CandidateSorted() {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const paramData = searchParam.get("data");
  const dataStr = JSON.parse(decodeURIComponent(paramData));

  const getData = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/download-files/?applicant_number=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, "__blank", "noopener,noreferrer");
      } else {
        console.log("error response");
      }
    } catch (error) {
      console.log("error getting pdf", error);
    }
  };

  const routeDetail = (id) => {
    const url = `/candidate-detail/?id=${id}`;
    window.open(url, "__blank", "noopener,noreferrer");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Here is the Rank list</h1>
      <div className="row">
        {dataStr.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="card-body">
                <h5 className="card-title">Applicant ID: {item.id}</h5>
                <p className="card-text">Score: {item.score}</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => getData(item.id)}
                    type="button"
                    className="btn btn-dark btn-sm"
                  >
                    View Resume
                  </button>
                  <button
                    onClick={() => routeDetail(item.id)}
                    className="btn btn-outline-dark btn-sm"
                  >
                    See Applicant Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CandidateSorted;
