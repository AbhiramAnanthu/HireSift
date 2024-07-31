import { useState } from "react";
import { useLocation } from "react-router-dom";

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
            "content-Type": "application/pdf",
          },
        } 
      );
      if(response.ok){
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, "__blank", "noopener,noreferrer");
      } else{
        console.log("error response");
      }
    } catch (error) {
      console.log("error getting pdf", error);
    }
  };
  return (
    <>
      <h1>Here is the Rank list</h1>
      {dataStr.map((item, index) => (
        <div key={index}>
          <p>Id:{item.id}</p>
          <p>Score:{item.score}</p>
          <p>
            Resume:{" "}
            <button
              onClick={() => getData(item.id)}
              type="button"
              className="btn btn-link"
            >
              view resume
            </button>
          </p>
        </div>
      ))}
    </>
  );
}

export default CandidateSorted;
