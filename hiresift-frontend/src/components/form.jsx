function Form() {
  return (
    <>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Job title
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Job desscription
          </label>
          <div className="col-sm-10">
            <textarea
              type="text"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Starting date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Ending date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Form;
