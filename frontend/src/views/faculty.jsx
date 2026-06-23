import React, { useState, useEffect } from 'react'
import Chatbox from '../components/chatbox'
import Header from '../components/header'
import Footer from '../components/footer'
import api from '../api.js'
import './faculty.css'

function Faculty() {
    const [facultyData, setFacultyData] = useState([])
    const [openSection, setOpenSection] = useState('Principal')
    const [loading, setLoading] = useState(true)

    const facultySections = [
        { label: "Principal", field: "designation", value: "Principal" },
        { label: "Vice Principal", field: "designation", value: "Vice Principal" },
        { label: "Dean of Arts", field: "designation", value: "Dean of Arts" },
        { label: "Dean of Science", field: "designation", value: "Dean of Science" },
        { label: "Office of QEC and ORIC", field: "department", value: "QEC and ORIC" },
        { label: "BS Coordinator", field: "designation", value: "BS Coordinator" },
        { label: "Coordinator for Admissions", field: "designation", value: "Coordinator for Admissions" },
        { label: "Office of the Controller of the Examination", field: "department", value: "Examination" },
        { label: "Department of Biology", field: "department", value: "Biology" }
    ]

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                const res = await api.get('/faculty')
                setFacultyData(res.data || [])
            } catch (err) {
                console.error("Error loading college faculty registry:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchFaculty()
    }, [])

    const getMembersForSection = (section) => {
        return facultyData.filter(member => {
            const memberValue = member[section.field]?.toLowerCase() || ''
            const matchValue = section.value.toLowerCase()
            return memberValue.includes(matchValue) || matchValue.includes(memberValue)
        })
    }

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
                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-success" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            facultySections.map((section, index) => {
                                const matchedMembers = getMembersForSection(section)
                                const isOpen = openSection === section.label

                                return (
                                    <div key={index} className="accordion-item-wrapper">
                                        <div
                                            className={`faculty-bar ${isOpen ? 'active-green' : 'white-bar'}`}
                                            onClick={() => setOpenSection(isOpen ? null : section.label)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <span>{section.label}</span>
                                            <span className="icon-style">{isOpen ? '-' : '+'}</span>
                                        </div>

                                        {isOpen && (
                                            <div className="faculty-content-area p-4 bg-white border-top-0">
                                                {matchedMembers.length === 0 ? (
                                                    <p className="text-muted mb-0 py-3 ps-2">No faculty records updated in this group yet.</p>
                                                ) : (
                                                    matchedMembers.map((member) => (
                                                        <div className="row align-items-center mb-4 pb-4 border-bottom last-no-border" key={member._id}>
                                                            <div className="col-md-4 col-lg-3 position-relative mb-3 mb-md-0 text-center">
                                                                <div className="faculty-circle-overlay"></div>
                                                                <img
                                                                    src={member.image ? `/uploads/${member.image}` : '/default-avatar.png'}
                                                                    alt={member.fullName}
                                                                    className="faculty-img-style rounded-circle shadow-sm"
                                                                    style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                                                                />
                                                            </div>

                                                            <div className="col-md-8 col-lg-9 ps-md-4">
                                                                <h3 className="fw-bold mb-1 text-dark">{member.fullName}</h3>
                                                                <h5 className="text-success mb-2 fw-semibold">{member.designation}</h5>
                                                                <p className="text-secondary mb-0">
                                                                    <strong>Department:</strong> {member.department}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faculty