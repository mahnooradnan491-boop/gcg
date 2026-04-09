import { Link } from "react-router-dom";
import "./home.css";
import About from "./about.jsx";
function Home() {
    return (
        <>
            <div className="hero p-5">
                <p className="text-success">The quality education is our priority</p>
                <h1 className="mb-5">Government<br />Graduate College<br />Gujranwala.</h1>
                <div className="mb-5">
                    <Link to="" className="btn btn-success me-3 rounded-0 py-3 px-5">
                        Enroll Now <img src="/icons/arrowup.png" alt="arrow-icon" width="15px" />
                    </Link>
                    <Link to="" className="btn btn-outline-success rounded-0 py-3 px-5">
                        Programs <img src="/icons/arrowup.png" alt="arrow-icon" className="green" width="15px" />
                    </Link>
                </div>
                <address>
                    <span className="me-2">
                        <img src="/icons/location.png" alt="location-icon" width="15px" />
                    </span>
                    SATELLITE TOWN, GUJRANWALA
                </address>
            </div>

            {/* Success Stories Section */}
            <div className="mt-5 px-5 mb-5">
                <h2 className="text-center mb-5">Our Success Stories</h2>
                <div className="d-flex gap-3">
                   
                    <div className="bg-light-grey p-4 flex-fill border">
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">5K+</h2>
                            <img src="/icons/student.png" alt="icon" width="25px" />
                        </div>
                        <p className="mt-4 mb-0">Regular Student</p>
                    </div>

                 
                    <div className="p-4 flex-fill border box-orange">
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">10K+</h2>
                            <img src="/icons/graduate.png" alt="icon" width="25px" />
                        </div>
                        <p className="mt-4 mb-0">Graduate Student</p>
                    </div>

                  
<div className="p-4 flex-fill border box-green">
    <div className="d-flex justify-content-between align-items-start">
        <h2 className="fw-bold">140+</h2>
        <img src="/icons/research.png" alt="icon" width="25px" />
    </div>
    <p className="mt-4 mb-0">Research Publications ↗</p>
</div>
                </div>
            </div>
        </>
    );
}

export default Home;