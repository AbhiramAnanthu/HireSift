import React from "react";
import { useState } from "react";
import axios from "axios";
import { json, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function PromptForm(props,{changeOrder}) {
  let result;
  const [data,setData] = useState();
  const [userInput,setUserInput] = useState({
    text:'',
    id:`${props.id}`,
  })
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput({
      ...userInput,
      [id]: value
    });
  };
  const handlSubmit = async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.get(`http://localhost:8000/working/`,{
            params:userInput
        });
        console.log(response.data);
        if(response){
            const encodeData = encodeURIComponent(JSON.stringify(response.data));
            const newTab = window.open(`/candidate-sorted-list?data=${encodeData}`,'__blank',"noopener,noreferrer");
        }
    } catch(error){
        console.log("error getting output",error);
    }
    
  }
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content shadow-lg">
            <div className="modal-header bg-dark text-white">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Start Filtering
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-white">
              <h4>Instructions</h4>
              <ul>
                <li>
                  Do not depend wholly on this software; hire the person if you
                  see fit. This only filters the resume as per your needs.
                </li>
                <li>
                  Please be descriptive about your qualifications and skills.
                </li>
              </ul>
              <p>That's it, you can start filtering.</p>
              <form onSubmit={handlSubmit}>
                <label htmlFor="text">Enter your prompt</label>
                <textarea
                  className="form-control mt-2"
                  id="text"
                  rows="3"
                  value={userInput.text}
                  onChange={handleChange}
                ></textarea>
              </form>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center modal-footer">
              <button
                type="button"
                className="btn btn-dark p-2 w-25 rounded-pill"
                onClick={handlSubmit}
              >
                Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromptForm;
