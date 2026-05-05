import React, { useState } from 'react';
import Chatbox from './chatbox';
import Header from './header';
import Footer from './footer';
import './faculty.css';

function Faculty() {
    
    const [openSection, setOpenSection] = useState('Principal');

    const facultyList = [
        "Principal",
        "Vice Principal",
        "Dean of Arts",
        "Dean of Science",
        "Office of QEC and ORIC",
        "BS Coordinator",
        "Coordinator for Admissions",
        "Office of the Controller of the Examination",
        "Department of Biology"
    ];

    return (
        <>
            <Chatbox />
            <Header />
            <div className="faculty-page-wrapper">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <p className="gallery-tag">GALLERY</p>
                        <h1 className="faculty-main-title">Our Respected Faculty</h1>
                    </div>

                    <div className="faculty-accordion-container">
                        {facultyList.map((item, index) => (
                            <div key={index} className="accordion-item-wrapper">
                                
                                <div 
                                    className={`faculty-bar ${openSection === item ? 'active-green' : 'white-bar'}`}
                                    onClick={() => setOpenSection(openSection === item ? null : item)}
                                >
                                    <span>{item}</span>
                                    <span className="icon-style">{openSection === item ? '-' : '+'}</span>
                                </div>

                               
                                {openSection === item && (
                                    <div className="faculty-content-area">
                                        <div className="row">
                                            <div className="col-md-5 position-relative">
                                                <div className="faculty-circle-overlay"></div>
                                                
                                                <img 
                                                    src="/principal.png" 
                                                    alt={item} 
                                                    className="faculty-img-style"
                                                />
                                            </div>
                                            <div className="col-md-7">
                                                
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faculty;