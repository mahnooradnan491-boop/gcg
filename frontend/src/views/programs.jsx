import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'

function Program() {
  return (
    <>
      <Chatbox />
      <Header />

      <div className="program-hero">
        <p className='program-top'>All the honours degree programs are offered with the affiliation of University of the Punjab</p>
        <h1><b>Offering Following Programs <br /> At GCG.</b></h1>
        <button>Enroll Now  <span className="ps-2"><img src="/icons/arrowup.png" alt="arrow-icon" width="12px" /></span></button>
      </div>

      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="mb-4 text-center">Search for a program</h3>
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
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/900098/Department-of-Information-Technology" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                      BS (Hons.) Information Technolog 
                    </a>
                  </h6>
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
                  <h6>
                    <a 
                      href="https://pu.edu.pk/admissions/programes/graduated" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                      BS (Hons.) Mathematics 
                    </a>
                  </h6>
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
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/900098/Department-of-Information-Technology" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                     BS (Hons.) Statistics 
                    </a>
                  </h6>
                </div>
              </div>
            </div>

          
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/botny.png" className="card-img-top" alt="Botny" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#fd7e14' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#fd7e14' }}></span>
                    Bachelors
                  </div>
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/4001/Institute-of-Botany" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                      BS (Hons.) Botany
                    </a>
                  </h6>
                </div>
              </div>
            </div>

            
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/chemistry.png" className="card-img-top" alt="Chemistry" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                    Masters
                  </div>
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/4401/School-of-Chemistry" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                      BS (Hons.) Chemistry 
                    </a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/english.png" className="card-img-top" alt="English" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#198754' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#198754' }}></span>
                    Diploma
                  </div>
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/900419/Institute-of-English-Studies" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                     BS (Hons.) English 
                    </a>
                  </h6>
                </div>
              </div>
            </div>

           <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/zology.png" className="card-img-top" alt="Zology" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                    Masters
                  </div>
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/6301/Institute-of-Zoology" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                     BS (Hons.) Zoology 
                    </a>
                  </h6>
                </div>
              </div>
            </div>


          <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/economics.png" className="card-img-top" alt="Economics" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                    Masters
                  </div>
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/900371/School-of-Economics" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                     BS (Hons.) Economics 
                    </a>
                  </h6>
                </div>
              </div>
            </div>


          <div className="col-md-4 mb-4">
              <div className="card">
                <img src="/physics.png" className="card-img-top" alt="Physics" />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-1 text-uppercase fw-bold" style={{ fontSize: '10px', color: '#6f42c1' }}>
                    <span className="rounded-circle me-1" style={{ width: '6px', height: '6px', backgroundColor: '#6f42c1' }}></span>
                    Masters
                  </div>
                  <h6>
                    <a 
                      href="https://pu.edu.pk/program/show/5501/Department-of-Physics" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark d-block"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    >
                     BS (Hons.) Physics 
                    </a>
                  </h6>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Program