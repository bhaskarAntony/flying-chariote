import React from 'react'

function Login() {
  return (
   <section className="container-fluid p-3 p-md-5">
        <div className="row">
            <div className="col-md-5 m-auto">
                <div className="card p-3">
                <h1 className="fs-2 fw-bold">Login</h1>
                <small className="small d-block">Enter your phone and we'll send you a login code</small>
                <br />
                <div className="form-group mt-2">
                    <label htmlFor="" className="form-label">Phone Number <span className="text-danger">*</span></label>
                    <input type="text" className="form-control"  placeholder='9**** *****'/>
                </div>
                <button className="btn btn-dark mt-3 w-100">CONTINUE</button>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Login