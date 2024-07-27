import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

function Success() {
    const location=useLocation();
    const searchParams = new URLSearchParams(location.search);
    const job_id = searchParams.get('job_id');

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Successfully Created Job</h1>
                            <p className="card-text">Job ID: <strong>{job_id}</strong></p>
                            <p className="card-text">
                                This is the link for submitting the form for candidates: 
                                <a href={`/candidate-form?job_id=${job_id}`}>Candidate form</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
