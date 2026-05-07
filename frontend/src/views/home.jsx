import { Link } from 'react-router-dom'
import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
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
                    <Link to="/register" className="btn btn-success me-3 rounded-0 py-3 px-5">
                        Enroll Now <img src="/icons/arrowup.png" alt="arrow-icon" width="15px" />
                    </Link>
                    <Link to="/programs" className="btn btn-outline-success rounded-0 py-3 px-5">
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
                        <Link to="/achievements" className="mt-4 nav-link">Graduate Student <img src="/icons/arrowup.png" alt="arrow-icon" width="10px" /></Link>
                    </div>
                    <div className="p-4 flex-fill box-green">
                        <div className="d-flex justify-content-between align-items-start">
                            <h2 className="fw-bold">140+</h2>
                            <img src="/icons/research.png" alt="icon" width="25px" />
                        </div>
                        <Link to="/achievements" className="mt-4 nav-link">Research Publications <img src="/icons/arrowup.png" alt="arrow-icon" width="10px" /></Link>
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
            <img src="/computerscience.png" className="card-img-top" alt="Computer Science" />
            <div className="card-body">
               
                <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#fd7e14' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#fd7e14' }}></span>
                    Bachelors
                </div>

                
                <h6>Computer Science and Engineering</h6>
            </div>
        </div>
    </div>

    <div className="col-md-4 mb-4">
        <div className="card">
            <img src="/civileng.png" className="card-img-top" alt="Civil Engineering" />
            <div className="card-body">
                <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                    Masters
                </div>
                <h6>Civil Engineering</h6>
            </div>
        </div>
    </div>

    <div className="col-md-4 mb-4">
        <div className="card">
            <img src="/computerscience.png" className="card-img-top" alt="Computer Science" />
            <div className="card-body">
            
                <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#fd7e14' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#fd7e14' }}></span>
                    Bachelors
                </div>
                
                <h6>Computer Science and Engineering</h6>
            </div>
        </div>
    </div>


    <div className="col-md-4 mb-4">
        <div className="card">
            <img src="/law.png" className="card-img-top" alt="Law" />
            <div className="card-body">
                <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#fd7e14' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#fd7e14' }}></span>
                    Bachelors
                </div>
                <h6>Department of law</h6>
            </div>
        </div>
    </div>

 <div className="col-md-4 mb-4">
        <div className="card">
            <img src="/civileng.png" className="card-img-top" alt="Civil Engineering" />
            <div className="card-body">
                <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                    Masters
                </div>
                <h6>Civil Engineering</h6>
            </div>
        </div>
    </div>


    <div className="col-md-4 mb-4">
        <div className="card">
            <img src="/web.png" className="card-img-top" alt="Web Design" />
            <div className="card-body">
                <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#198754' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#198754' }}></span>
                    Diploma
                </div>
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