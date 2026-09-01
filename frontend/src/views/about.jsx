import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from 'framer-motion'
import './about.css'

function About() {
    return (
        <>
            <Chatbox />
            <Header />
            <div className="about-page-wrapper">
                <div className="container py-5">
                    <div className="row mb-5 align-items-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="col-md-5 text-center position-relative p-0"
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="principal-circle-overlay"
                            ></motion.div>
                            <img
                                src="/principal.png"
                                alt="Principal"
                                className="principal-image-style shadow-lg"
                            />
                        </motion.div>
                        <div className="col-md-7 ps-md-5">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="label-box mb-4 mt-5 mt-lg-0 shadow-sm">Principal Message</h3>
                            </motion.div>
                            <motion.p 
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="content-para"
                            >
                                Education is a journey that transforms not only your mind but also your character. My advice to the students is that as you navigate your academic pursuits, remember that the skills and knowledge you acquire here will serve as the foundation for a successful and bright future. Unwavering dedication of our teachers and students are cornerstones of the institution. The guidance and mentorship of teachers shape the minds of the next generation, leaving an indelible mark on their lives. I am confident that my efforts will provide our students a real-world experience so they would make major contributions to the country.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="content-para"
                            >
                                I encourage all the students and staff members of this college to actively engage in the various academic, cultural, and extracurricular activities that our college has to offer. These experiences not only enrich your time here but also contribute to the vibrant tapestry of our college community. Together, we will continue to build a community that values knowledge, fosters creativity, and prepares individuals to make a positive impact on the world.
                            </motion.p>
                        </div>
                    </div>
                    <div className="mt-5 pt-5">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="about-title-container"
                        >
                            <h3 className="label-box shadow-sm">About Us</h3>
                            <motion.div 
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="center-divider-line"
                            ></motion.div>
                        </motion.div>
                        
                        <div className="row pt-4 align-items-start">
                            <div className="col-md-7">
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                >
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
                                </motion.div>
                            </div>
                            <div className="col-md-5 ps-md-4">
                                <motion.div 
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="find-us-wrapper mb-3"
                                >
                                    <h2 className="find-us-label-outside">Find Us At</h2>
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <div className="black-info-card shadow-lg">
                                        <ul className="info-list">
                                            <motion.li 
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                whileHover={{ x: -8, color: '#4ade80' }}
                                            >
                                                University of the Punjab
                                            </motion.li>
                                            <motion.li 
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.25 }}
                                                whileHover={{ x: -8, color: '#4ade80' }}
                                            >
                                                Higher Education Department, Punjab
                                            </motion.li>
                                            <motion.li 
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.4 }}
                                                whileHover={{ x: -8, color: '#4ade80' }}
                                            >
                                                Punjab Portal
                                            </motion.li>
                                            <motion.li 
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.55 }}
                                                whileHover={{ x: -8, color: '#4ade80' }}
                                            >
                                                Punjab Higher Education Commission
                                            </motion.li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;