import Chatbox from './chatbox'
import Header from './header'
import Footer from './footer'


function Program() {

  const programData = [
    {
      img: "/public/computerscience.png",
      level: "BACHELORS",
      title: "Computer Science and Engineering"
    },
    {
      img: "/public/civileng.png",
      level: "MASTERS",
      title: "Civil Engineering"
    },
    {
      img: "/public/law.png",
      level: "BACHELORS",
      title: "Department of Law"
    },
    {
      img: "/public/civileng.png",
      level: "MASTERS",
      title: "Civil Engineering"
    },
    {
      img: "/public/computerscience.png",
      level: "BACHELORS",
      title: "Computer Science and Engineering"
    },
    {
      img: "/public/web.png",
      level: "DIPLOMA",
      title: "Web Designing and Development"
    }
  ]

  return (
    <>
      <Chatbox />
      <Header />

     

        <div className="program-hero">
          <p className='program-top'>All the honours degree programs are offered with the affiliation of University of the Punjab</p>
          <h1><b>Offering Following Programs <br /> At GCG.</b></h1>
          <button>Enroll Now  <span className="ps-2"><img src="/icons/arrowup.png" alt="arrow-icon" width="12px" /></span></button>
        </div>

        <div className="program-search">
          <h2>Search for a program</h2>
           </div>

          <div className="search-bar">
            <input type="text" placeholder="Search for a course" />
            <button>Bachelor</button>
            <button>Masters</button>
            <button>Diploma</button>
            <button className="view-btn">View All</button>
         
        </div>

        <div className="program-cards container">
          <div className="row">
            {
              programData.map((item, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <div className="program-card">
                    <img src={item.img} alt="" />
                    <p>{item.level}</p>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

     

      <Footer />
    </>
  )
}

export default Program