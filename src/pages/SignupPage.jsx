import React from "react";
import style from "../styles/singup.module.css";
import {Link } from "react-router-dom";

function SignupPage() {
  return (
    <section className={`d-flex align-items-center ${style.sing_up_section}`}>
      <div className="container h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample "
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="name">
                Full Name *
                </label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="number"
                  id="mobile"
                  className="form-control form-control"                />
                <label className="form-label" htmlFor="mobile">
                  Mobile No *
                </label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Pharmacy Name *
                </label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Address *
                </label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  License No *
                </label>
              </div>

              <div className="mb-4">
                <label htmlFor="formFileLg" className="form-label">
                  Profile Photo
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
             
              <div className="mb-4">
                <label htmlFor="formFileLg" className="form-label">
                 License or NID photo *
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>              

              

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className={`"btn btn-primary btn-lg ${style.my_btn}`}
                >
                  Submit
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                <Link to="/sing-in">Login</Link>
                    
                 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
