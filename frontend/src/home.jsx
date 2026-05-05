import { Link } from 'react-router-dom'
import Chatbox from './chatbox'
import Header from './header'
import Footer from './footer'
import './home.css'

function Home() {
    return (
        <>
            <Chatbox />
            <Header />
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
            <div className="mt-5 px-5 mb-5">
                <h2 className="text-center mb-5">Our Success Stories</h2>
                <div className="d-flex gap-3">
                    <div className="bg-light-grey p-4 flex-fill">
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">5K+</h2>
                            <img src="/icons/student.png" alt="icon" width="25px" />
                        </div>
                        <p className="mt-4 mb-0">Regular Student</p>
                    </div>
                    <div className="p-4 flex-fill box-orange">
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">10K+</h2>
                            <img src="/icons/graduate.png" alt="icon" width="25px" />
                        </div>
                        <Link to="/research" className="mt-4 nav-link">Graduate Student <img src="/icons/arrowup.png" alt="arrow-icon" width="10px" /></Link>
                    </div>
                    <div className="p-4 flex-fill box-green">
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">140+</h2>
                            <img src="/icons/research.png" alt="icon" width="25px" />
                        </div>
                        <Link to="/research" className="mt-4 nav-link">Research Publications <img src="/icons/arrowup.png" alt="arrow-icon" width="10px" /></Link>
                    </div>
                </div>
            </div>
            <section className="news-section" id="newsevents">
                <div className="container">
                    <h3 className="text-center mb-4">
                        Stay Update With News & Events
                    </h3>
                    <div className="news-tabs">
                        <button className="active"> <img src="/icons/info.png" alt="icon" General width="25px"></img> Genral notice</button>
                        <button> <img src="/icons/info.png" alt="icon" General width="25px"></img>News & Events</button>
                        <button><img src="/icons/calender.png" alt="icon" General width="25px"></img>Exams Date Sheet</button>
                        <button><img src="/icons/clock.png" alt="icon" General width="25px"></img>Time Table</button>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="notice-box">
                                <div className="date-box">
                                    <div className='highlight'></div>
                                    <span>20</span>
                                    <small>March</small>
                                </div>
                                <p>Registration Deadline for Summer is 31 March</p>
                            </div>
                            <div className="notice-box">
                                <div className="date-box">
                                    <div className='highlight'></div>
                                    <span>10</span>
                                    <small>August</small>
                                </div>
                                <p>Registration Deadline for Summer is 10 August</p>
                            </div>
                            <div className="notice-box">
                                <div className="date-box">
                                    <div className='highlight'></div>
                                    <span>03</span>
                                    <small>December</small>
                                </div>
                                <p>Registration Deadline for Summer is 03 December</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="news-detail">
                                <h6>10 August, 2026</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                </p>
                                <p>
                                    Regards <br />
                                    Head of Department
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container">
                    <h3 className="mb-4">Search for a program</h3>
                    <div className="d-flex mb-4">
                        <input
                            type="text"
                            placeholder="Search for a course"
                            className="form-control rounded-0"
                        />
                        <button className="btn btn-outline-secondary rounded-0">Bachelor</button>
                        <button className="btn btn-outline-secondary rounded-0">Masters</button>
                        <button className="btn btn-outline-secondary rounded-0">Diploma</button>
                        <button className="btn btn-success rounded-0 px-5 text-nowrap">View All</button>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/computerscience.png" className="card-img-top" />
                                <div className="card-body">
                                    <h6>Computer Science and Engineering</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/civileng.png" className="card-img-top" />
                                <div className="card-body">
                                    <h6>Civil Engineering</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="data:image/jpeg;base64,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" className="card-img-top" />
                                <div className="card-body">
                                    <h6>Department of BS English</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/civileng.png" className="card-img-top" />
                                <div className="card-body">
                                    <h6>Civil Engineering</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/computerscience.png" className="card-img-top" />
                                <div className="card-body">
                                    <h6>Computer Science and Engineering</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="/web.png" className="card-img-top" />
                                <div className="card-body">
                                    <h6>Web design and development</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="research-section">
                <h2 className="research-title">Research & Publications</h2>
                <div className="research-container">
                    <div className="research-left">
                        <p>
                            Our college values the role of University of the Punjab’s Office of
                            Research, Innovation & Commercialization (ORIC). Established in March
                            2010, ORIC is entrusted with the management of all financed
                            research-related activities conducted by academic and research units
                            within the institution. By adhering to the directives of the Higher
                            Education Commission (HEC) and ORIC, our academic staff contributes
                            to the advancement of research and innovation.
                        </p>
                        <div className="info-circle">i</div>
                    </div>
                    <div>
                        <div className="research-right">
                            <h3>Free Online Research Resources</h3>
                            <div className="research-links">
                                <Link to="/research" className="nav-link">View <img src="/icons/arrowup.png" alt="arrow-icon" width="15px" /></Link>
                            </div>
                        </div>
                        <div className="text-end">
                            <Link to="/online-databases" className="mt-4 d-block">Online Databases</Link>
                            <Link to="/pu-library" className="mt-2 d-block">PU Library</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home