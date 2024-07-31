import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
function ApplicantDetail() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const id  = searchParam.get("id");
  useEffect(()=>{
    const getData = async () => {
        try {
          const response = await axios(
            `http://localhost:8000/get-applicant-details/?id=${id}`
          );
          setData(response.data);
        } catch (error) {
          console.log("error getting data", error);
        }
      };
      getData();
  },[id]);
  const getPdf = async ()=>{
    try{
        const pd_response = await fetch(`http://localhost:8000/download-files/?applicant_number=${id}`);
        if (pd_response.ok){
            const blob = await pd_response.blob();
            const url = window.URL.createObjectURL(blob);
            window.open(url, "__blank", "noopener,noreferrer");
        }
    } catch(error){
        console.log("error getting resume",error);
    }
  }
  return (
    <>
    <h1>Candidate details</h1>
      {data.map((person, index) => (
        <div key={index}>
          <p>Name:{person.Name}</p>
          <p>Id:{person.id}</p>
          <p>Phone No:{person.phone}</p>
          <p>Email:{person.email}</p>
          <p>
            Resume:
            <button onClick={() => getPdf(person.id)} className="btn btn-link">
              View resume
            </button>
          </p>
        </div>
      ))}
    </>
  );
}

export default ApplicantDetail;
