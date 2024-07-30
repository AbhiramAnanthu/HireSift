import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function CandidateSorted() {
  let dataWrap = [];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = JSON.parse(decodeURIComponent(queryParams.get("data")));

  data.forEach((element) => {
    dataWrap.push(element);
  });
  const GetData = ({ id }) => {
    const [userData, setData] = useState([]);
    const [pdfdata, setpdfdata] = useState([]);
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/get-applicant-details/?id=${id}`
          );
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(`Error getting data: ${error}`);
        }
      };

      getData();
    }, [id]);
    const  handleClick = async(e,id) => {
        e.preventDefault()
        try{
            const resume = await fetch(
                `http://127.0.0.1:8000/download-files/?applicant_number=${id}`,
                {
                  method: "GET",
                  headers: {
                    "content-Type": "application/pdf",
                  },
                }
              );
              if (resume.ok) {
                const blob = await resume.blob();
                const url = window.URL.createObjectURL(blob);
                setpdfdata(url);
              } else {
                console.log("error getting pdf");
              }
        } catch(error){
            console.log("error getting pdf ",error);
        }
          
    }
    return (
      <>
        {userData.map((applicant, index) => {
          <div key={index}>
            <p>Name: {applicant.Name}</p>
            <p>Id:{applicant.id}</p>
            <p>
              resume: <button
              onClick={(e) => handleClick(e,applicant.id)}
              type="button"
              className="btn btn-link btn-dark"
              >
                view resume
              </button>
            </p>
          </div>;
        })}
      </>
    );
  };
  return (
    <>
      <h1>Here is the Rank list of Candidates</h1>
      {dataWrap.map((candidate, index) => (
        <div key={index}>
          <GetData id={candidate.id} />
        </div>
      ))}
    </>
  );
}
export default CandidateSorted;
