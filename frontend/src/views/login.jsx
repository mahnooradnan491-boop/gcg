import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import api from '../api';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/admission')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisable(true)
        try {
            const res = await api.post('http://localhost:3000/api/login', { email, password })
            if (res.data.message == 'Login Successful') {
                localStorage.setItem("user", JSON.stringify(res.data.info))
                navigate('/admission')
            } else {
                setMessage(res.data.message)
            }
        }
        catch (err) {
            setMessage(err.response?.data?.message || "Login failed")
        }
    }

    return (
        <div className="login-master-wrapper d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-11 col-lg-10 col-xl-9">
                        <div className="main-login-card shadow d-flex flex-column flex-md-row">

                            <div className="left-panel-green bg-success d-flex flex-column justify-content-between">
                                <div className="panel-text text-white p-4">
                                    <h1 className="fw-bold">Let's Grow Up <br /> Your Future <br /> With</h1>
                                    <p className="small opacity-75">Learn important new skills, discover passions or hobbies.</p>
                                </div>
                                <div>
                                    <img src="/loginbg.png" alt="students" width="100%" />
                                </div>
                            </div>
                            <div className="right-panel-white p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
                                <div className="logo-box mb-4 text-center text-md-start">
                                    <img src="/logo.png" alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
                                </div>
                                <h3 className="fw-bold mb-3">Sign in to your account</h3>

                                {message && <div className="alert alert-info py-2 small">{message}</div>}

                                <form className="login-form" onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <label className="form-label small fw-bold text-muted">Email Address</label>
                                        <input type="email" className="form-control input-style" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="mb-2">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label small fw-bold text-muted">Password</label>
                                            <Link to="/forgotpassword" className="forgot-link">Forgot Password?</Link>
                                        </div>
                                        <input type="password" className="form-control input-style" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="8" />
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" id="check" />
                                        <label className="form-check-label small text-muted" htmlFor="check">Keep me logged in</label>
                                    </div>
                                    <button type="submit" className="btn btn-success w-100 fw-bold" disabled={disable}>Sign In</button>
                                </form>
                                <div className="mt-4 text-center small text-muted">
                                    <p>
                                        Don't have an account? <Link to="/register" className="forgot-link fw-bold">Sign Up</Link>
                                    </p>
                                    Copyright © 2026 - All Rights Reserved. GCG <br /> <Link to="/" className="text-success text-decoration-none">Back to site</Link>
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