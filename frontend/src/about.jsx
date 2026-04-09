import React from 'react';
import "./about.css";

function About() {
    return (
        <div className="about-page-wrapper">
            <div className="container py-5">
                {/* --- Principal Message Section --- */}
                <div className="row mb-5 align-items-center">
                    <div className="col-md-5 text-center position-relative p-0">
                        
                        <div className="principal-circle-overlay"></div>
                        <img 
                            src="/principal.png" 
                            alt="Principal" 
                            className="principal-image-style" 
                        />
                    </div>
                    <div className="col-md-7 ps-md-5">
                        <h3 className="label-box mb-4">Principal Message</h3>
                        <p className="content-para">
                            Education is a journey that transforms not only your mind but also your character. My advice to the students is that as you navigate your academic pursuits, remember that the skills and knowledge you acquire here will serve as the foundation for a successful and bright future. Unwavering dedication of our teachers and students are cornerstones of the institution. The guidance and mentorship of teachers shape the minds of the next generation, leaving an indelible mark on their lives. I am confident that my efforts will provide our students a real-world experience so they would make major contributions to the country.
                        </p>
                        <p className="content-para">
                            I encourage all the students and staff members of this college to actively engage in the various academic, cultural, and extracurricular activities that our college has to offer. These experiences not only enrich your time here but also contribute to the vibrant tapestry of our college community. Together, we will continue to build a community that values knowledge, fosters creativity, and prepares individuals to make a positive impact on the world.
                        </p>
                    </div>
                </div>

                {/* --- About Us Section --- */}
                <div className="mt-5 pt-5">
                    <div className="about-title-container">
                        <h3 className="label-box">About Us</h3>
                        <div className="center-divider-line"></div>
                    </div>

                    <div className="row mt-5 pt-3">
                        
                        <div className="col-md-7">
                            <p className="content-para">
                                Govt. Graduate College for Boys, Satellite Town, Gujranwala, is one of the oldest educational institutions in Gujranwala Division. S.M. Sharif, Education Adviser appointed by the Government of Pakistan, laid the cornerstone on March 1st, 1954. The college has also been known as Govt. Post-Graduate College for Boys, Satellite Town, Gujranwala, and Govt. College, Gujranwala (GCG). The college has 180 faculty members and 23 working departments focused on delivering top-notch education as well as engaging in original and potentially groundbreaking research. The college offers BS honour programs in 14 subjects. These programs include BS (Hons.) English, BS (Hons.) Physics, BS (Hons.) Chemistry, BS (Hons.) Mathematics, BS (Hons.) Social Work, BS (Hons.) Information Technology, BS (Hons.) Economics, BS (Hons.) Commerce, BS (Hons.) Statistics, BS (Hons.) Zoology, and BS (Hons.) Botany. All the honour degree programs are offered with the affiliation of the University of the Punjab.
                            </p>
                            <p className="content-para">
                                The college also offers higher secondary school certificates (HSSC) such as F.Sc. (Pre-Medical), F.Sc. (Pre-Engineering), ICS, I.Com, and FA with the affiliation of the Board of Intermediate and Secondary Education (BISE), Gujranwala.
                            </p>
                            
                            <h2 className="affiliation-title mt-5">Affiliation</h2>
                            <p className="content-para">
                                We are proudly affiliated with University of the Punjab (PU), and together, we strive to uphold the highest standards of education and research, preparing our students to contribute to the dynamic world. Following the guidelines set out by the University of the Punjab, we are committed to maintaining academic standards and ensuring that both teaching and research activities align with the directions of the university.
                            </p>
                        </div>

                       

                        <div className="col-md-5 ps-md-4">
                            <h2 className="find-us-label-outside">Find Us At</h2>
                            <div className="black-info-card">
                                <ul className="info-list">
                                    <li>University of the Punjab</li>
                                    <li>Higher Education Department, Punjab</li>
                                    <li>Punjab Portal</li>
                                    <li>Punjab Higher Education Commission</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;