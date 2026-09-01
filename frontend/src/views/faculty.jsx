import React, { useState, useEffect } from 'react';
import Chatbox from '../components/chatbox';
import Header from '../components/header';
import Footer from '../components/footer';
import './faculty.css';

function Faculty() {
    const [openSection, setOpenSection] = useState('Principal');
    const [facultyList, setFacultyList] = useState([]);

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/faculties');
                const data = await response.json();

                const groupedFaculty = data.reduce((groups, faculty) => {
                    if (!groups[faculty.department]) {
                        groups[faculty.department] = [];
                    }

                    groups[faculty.department].push(faculty);

                    return groups;
                }, {});

                const formattedFaculty = Object.keys(groupedFaculty).map((department) => ({
                    id: department,
                    members: groupedFaculty[department]
                }));

                setFacultyList(formattedFaculty);

                if (formattedFaculty.length > 0) {
                    setOpenSection(formattedFaculty[0].id);
                }
            } catch (error) {
                console.error('Error fetching faculty:', error);
            }
        };

        fetchFaculty();
    }, []);

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

                        {facultyList.length === 0 ? (
                            <div className="text-center text-muted py-5">
                                No faculty found.
                            </div>
                        ) : (
                            facultyList.map((dept, index) => (
                                <div key={index} className="accordion-item-wrapper">

                                    <div
                                        className={`faculty-bar ${
                                            openSection === dept.id
                                                ? 'active-green'
                                                : 'white-bar'
                                        }`}
                                        onClick={() =>
                                            setOpenSection(
                                                openSection === dept.id
                                                    ? null
                                                    : dept.id
                                            )
                                        }
                                    >
                                        <span>{dept.id}</span>

                                        <span className="icon-style">
                                            {openSection === dept.id ? '-' : '+'}
                                        </span>
                                    </div>

                                    {openSection === dept.id && (
                                        <div className="faculty-content-area">

                                            <div className="faculty-grid-display-container">

                                                {dept.members.map((member, memIndex) => (
                                                    <div
                                                        key={memIndex}
                                                        className="faculty-individual-card"
                                                    >

                                                        <div className="faculty-img-container">

                                                            <img
                                                                src={
                                                                    member.image
                                                                        ? `http://localhost:3000/uploads/${member.image}`
                                                                        : '/default-faculty.png'
                                                                }
                                                                alt={member.fullName}
                                                                className="faculty-img-style"
                                                            />

                                                        </div>

                                                        <div className="faculty-info-under-img">

                                                            <h3 className="faculty-member-name">
                                                                {member.fullName}
                                                            </h3>

                                                            <p className="faculty-member-role">
                                                                {member.designation}
                                                            </p>

                                                        </div>

                                                    </div>
                                                ))}

                                            </div>

                                        </div>
                                    )}

                                </div>
                            ))
                        )}

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Faculty;