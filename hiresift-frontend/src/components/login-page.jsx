function Login(){
    return(
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form >
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign in</button>
          <div className="text-center my-3">
            <small className="text-muted">or</small>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger w-100"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              className="me-2"
              alt="Google icon"
            /> 
            Continue with Google
          </button>
        </form>
      </div>
    </div>
        </>
    )
}

export default Login