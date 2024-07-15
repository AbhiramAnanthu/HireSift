function Form(props) {
  const employeeForm = [
    "JobTitle",
    "Job Description",
  ];
  const applicantForm = [
    "Applicant Name",
    "Address",
    "Phone Number",
    "Email",
    "Upload Resume",
    "Write an essay for your application",
  ];
  function CheckForm({ name, TextArea }) {
    let title = [];
    if (name === "e") {
      title = employeeForm;
    } else {
      title = applicantForm;
    }

    return (
      <>
        {title.map((item, index) => (
          <div className="row mb-3" key={index}>
            <label htmlFor={item} className="col-sm-2 col-form-label">
              {item}
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id={item} />
            </div>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      <form>
        <CheckForm 
        name={props.name} 
        />
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
