import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    return (
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
    )
}

export default Home;