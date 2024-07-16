function Form() {
  const FormTitle = [
    "Job Title",
    "Job description",
    "Starting date",
    "Ending date",
  ];
  function CheckForm({ input }) {
    if (input === "Job Title") {
      return <input type="text" className="form-control" id={input} />;
    } else if (input === "Job description") {
      return <textarea type="text" className="form-control" id={input} />;
    } else if (input === "Starting date" || input === "Ending date") {
      return <input type="date" className="form-control" id={input} />;
    }
  }
  return (
    <>
      <form>
        {FormTitle.map((item, index) => (
          <div className="row mb-3" key={index}>
            <label htmlFor={item} className="col-sm-2 col-form-label">
              {item}
            </label>
            <div className="col-sm-10">
              <CheckForm input={item} />
            </div>
          </div>
        ))}
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2"></div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
