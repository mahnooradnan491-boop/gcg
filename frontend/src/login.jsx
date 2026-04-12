import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-master-wrapper d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-10 col-xl-9">
            
            <div className="main-login-card shadow d-flex flex-column flex-md-row">
              
              <div className="left-panel-green p-4 d-flex flex-column justify-content-between">
                <div className="panel-text">
                  <h1 className="fw-bold">Let's Grow Up <br /> Your Future <br /> With</h1>
                  <p className="small opacity-75">Learn important new skills, discover passions or hobbies.</p>
                </div>
                <div className="panel-img text-center">
                  <img src="/computerscience.png" alt="CS" className="img-fluid cs-image" />
                </div>
              </div>

              
              <div className="right-panel-white p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
                <div className="logo-box mb-4">
                  <img src="/logo.png" alt="Logo" className="img-fluid" style={{maxWidth: '150px'}} />
                </div>

                <h3 className="fw-bold mb-3">Sign in to your account</h3>

                <form className="login-form">
                  <div className="mb-2">
                    <label className="form-label small fw-bold text-muted">Email Address</label>
                    <input type="email" className="form-control input-style" placeholder="eldo.nawawi@edufactory.com" />
                  </div>

                  <div className="mb-2">
                    <div className="d-flex justify-content-between">
                      <label className="form-label small fw-bold text-muted">Password</label>
                      <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>
                    <input type="password" className="form-control input-style" placeholder="••••••••" />
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="check" />
                    <label className="form-check-label small text-muted" htmlFor="check">Keep me logged in</label>
                  </div>
                  <button type="submit" className="btn signin-btn w-100 fw-bold">Sign In</button>
                </form>

                <div className="footer-box mt-4 text-center">
                  <p className="text-muted" style={{fontSize: '11px'}}>
                    Copyright © 2026 - All Rights Reserved. GCG | <a href="#" className="back-link fw-bold">Back to Site</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;