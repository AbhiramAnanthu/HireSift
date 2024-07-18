import JobForm from "./jobForm";
import JobHistory from "./jobHistory";
function Main() {
    return (
    <>
      <button
        type="button"
        className="btn btn-dark m-4 p-2"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Start New Session
      </button>
      <JobForm />
      <JobHistory />
    </>
  );
}

export default Main;
