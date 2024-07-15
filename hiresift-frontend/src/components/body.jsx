import JobForm from "./jobForm";
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
    </>
  );
}

export default Main;
