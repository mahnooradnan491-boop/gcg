import React, { useEffect, useState } from 'react';
import Chatbox from '../components/chatbox';
import Header from '../components/header';
import Footer from '../components/footer';
import api from '../api';
import './faculty.css';

function Faculty() {
    const [openSection, setOpenSection] = useState(['Principal']);
    const [dynamicFaculty, setDynamicFaculty] = useState([]);

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                const res = await api.get('/faculty');
                setDynamicFaculty(res.data);
            } catch (error) {
                console.error('Error fetching faculty:', error);
            }
        };

        fetchFaculty();
    }, []);

    const facultyList = [
        {
            id: "Principal",
            members: [
                { role: "Principal", name: "Dr. Nazir Ahmad", img: "/principal.png" }
            ]
        },
        {
            id: "Vice Principal",
            members: [
                { role: "Vice Principal", name: "Muhammad Abdullah Nouman", img: "/vice principal.jpeg" }
            ]
        },
        {
            id: "Dean of Arts",
            members: [
                { role: "Dean of Arts", name: "Prof. Dr. Babur Baig Mitaly", img: "/Prof Dr. Babur.jpeg" }
            ]
        },
        {
            id: "Dean of Science",
            members: [
                { role: "Dean of Sciences", name: "Dr. khalid Mehmood", img: "/Dr. Khalid Mahmood.jpeg" }
            ]
        },
        {
            id: "Office of QEC and ORIC",
            members: [
                { role: "Head of QEC and ORIC", name: "Dr. Ijaz Ahmad", img: "/Dr.Ijaz Ahmad.jpeg" },
                { role: "Coordinator", name: "Muhammad Jamil Yousaf (QEC)", img: "/Jamil Yousaf.jpeg" }
            ]
        },
        {
            id: "BS Coordinator",
            members: [
                { role: "BS Coordinator", name: "Touqeer Aslam", img: "/Touqeer Aslam.jpeg" }
            ]
        },
        {
            id: "Coordinator for Admissions",
            members: [
                { role: "Professor", name: "Dr.Tahir Mehmood Butt", img: "/Dr.Tahir Mehmood Butt.jpeg" }
            ]
        },
        {
            id: "Office of the Controller of the Examination",
            members: [
                { role: "Deputy Controller", name: "Salamat Ali Cheema", img: "/Salamat Ali Cheema.jpeg" },
                { role: "Assistant Controller", name: "Muhammad Maqsood Tahir", img: "/Maqsood Tahir.jpeg" }
            ]
        },
        {
            id: "Department of Biology",
            members: [
                { role: "Professor", name: "Muhammad Iqbal Khan", img: "/Muhammad Iqbal Khan.jpeg" },
                { role: "Professor", name: "Dr.Ijaz Ahmad", img: "/Dr.Ijaz Ahmad.jpeg" },
                { role: "Professor", name: "Dr.Shahzad Mahmood", img: "/Dr.Shahzad Mahmood.jpeg" },
                { role: "Professor", name: "Ameer Hamza", img: "/Ameer Hamza.jpeg" }
            ]
        },
        {
            id: "Department of Mathematics",
            members: [
                { role: "Professor", name: "Abdul Rehman", img: "/Abdul Rehman.jpeg" },
                { role: "Professor", name: "Salamat Ali Cheema", img: "/Salamat Ali Cheema.jpeg" },
                { role: "Professor", name: "Muhammad Amjad", img: "/Muhammad Amjad.jpeg" },
                { role: "Professor", name: "Qamar Waseem Chughtai", img: "/Qamar Waseem Chughtai.jpeg" }
            ]
        },
        {
            id: "Department of Statistics",
            members: [
                { role: "Professor", name: "Mirza Javed Akhter", img: "/Mirza Javed Akhtar.jpeg" },
                { role: "Professor", name: "Dr.Fiaz Ahmad Bhatti", img: "/Dr.Fiaz Ahmad Bhatti.jpeg" },
                { role: "Professor", name: "Saif Ullah Gill", img: "/Saif Ullah Gill.jpeg" },
                { role: "Professor", name: "Muhammad Maqsood Tahir", img: "/Muhammad Maqsood Tahir.jpeg" }
            ]
        },
        {
            id: "Department of Botany",
            members: [
                { role: "Professor", name: "Aamir Ishaq", img: "/Aamir Ishaq.jpeg" },
                { role: "Professor", name: "Muneeb Akram", img: "/Muneeb Akram.jpeg" }
            ]
        },
        {
            id: "Department of Chemistry",
            members: [
                { role: "Professor", name: "Muhammad Imran", img: "/Muhammad Imran.jpeg" },
                { role: "HOD / Professor", name: "Dr. Zia Ullah Khokhar", img: "/Dr. Zia Ullah Khokhar.jpeg" },
                { role: "HOD / Professor", name: "Shahbaz Ali", img: "/Shahbaz Ali.jpeg" }
            ]
        },
        {
            id: "Department of Arabic",
            members: [
                { role: "Professor", name: "Abubakar Siddique", img: "/Abubakar Siddique.jpeg" }
            ]
        },
        {
            id: "Department of Economics",
            members: [
                { role: "Professor", name: "Muhammad Huzefah", img: "/Muhammad Huzefah.jpeg" },
                { role: "Professor", name: "Shahid Mahmood", img: "/Shahid Mahmood.jpeg" },
                { role: "Professor", name: "Muhammad Arif Khan", img: "/Muhammad Arif Khan.jpeg" }
            ]
        },
        {
            id: "Department of English",
            members: [
                { role: "HOD / Professor", name: "Muhammad Abdullah Nouman", img: "/Muhammad Abdullah Nouman.jpeg" },
                { role: "Professor", name: "Sana Ullah", img: "/Sana Ullah.jpeg" },
                { role: "Professor", name: "Muhammad Akhtar Ghumman", img: "/Muhammad Akhtar Ghumman.jpeg" },
                { role: "Professor", name: "Umar Daraz", img: "/Umar Daraz.jpeg" }
            ]
        },
        {
            id: "Department of Information Technology",
            members: [
                { role: "HOD IT Department", name: "Usman Saif", img: "/Usman Saif.jpeg" },
                { role: "Professor", name: "Syed Zubair Hussain Shah", img: "/syed zubair.jpeg" },
                { role: "Professor", name: "Kashif Riaz", img: "/Kashif Riaz.jpeg" },
                { role: "Professor", name: "Jary Ullah", img: "/Jary Ullah.jpeg" },
                { role: "Professor", name: "Ahmad Ahsan", img: "/Ahmad Ahsan.jpeg" }
            ]
        },
        {
            id: "Department of Physics",
            members: [
                { role: "Professor", name: "Dr. Khalid Mahmood", img: "/Dr. Khalid Mahmood.jpeg" },
                { role: "Professor", name: "Saeed Ahmad Mirza", img: "/Saeed Ahmad Mirza.jpeg" },
                { role: "Professor", name: "Ghulam Dastgir", img: "/Ghulam Dastgir.jpeg" },
                { role: "Professor", name: "Aamir Shehzad", img: "/Aamir Shehzad.jpeg" }
            ]
        },
        {
            id: "Department of Psychology",
            members: [
                { role: "Professor", name: "Touqeer Aslam", img: "/Touqeer Aslam.jpeg" },
                { role: "Professor", name: "Iftikhar Ahmad", img: "/Iftikhar Ahmad.jpeg" }
            ]
        },
        {
            id: "Department of Political Science",
            members: [
                { role: "Professor", name: "Ch. Muhammad Riaz", img: "/Ch.Muhammad Riaz.jpeg" },
                { role: "Professor", name: "Muhammad Umair Alam", img: "/Muhammad Umair Alam.jpeg" }
            ]
        },
        {
            id: "Department of Zoology",
            members: [
                { role: "Professor", name: "Muhammad Jamil Yousaf", img: "/Muhammad Jamil Yousaf.jpeg" },
                { role: "Professor", name: "Dr.Muhammad Ahsan Raza", img: "/Dr.Muhammad Ahsan Raza.jpeg" },
                { role: "Professor", name: "MIRZA ZOHAIB TARIQ BAIG", img: "/MIRZA ZOHAIB TARIQ BAIG.jpeg" },
                { role: "Professor", name: "Rizwan Rasool", img: "/Rizwan Rasool.jpeg" }
            ]
        },
        {
            id: "Department of Sociology",
            members: [
                { role: "Professor", name: "Dr.Tahir Mehmood Butt", img: "/Dr.Tahir Mehmood Butt.jpeg" }
            ]
        },
        {
            id: "Department of Social Work",
            members: [
                { role: "Professor", name: "Abid Mehmood Ansari", img: "/Abid Mehmood Ansari.jpeg" },
                { role: "Professor", name: "Wasim Noor", img: "/Wasim Noor.jpeg" }
            ]
        },
        {
            id: "Department of Islamic Studies",
            members: [
                { role: "Professor", name: "Prof Dr. Babur.jpeg", img: "/Prof Dr. Babur.jpeg" },
                { role: "Professor", name: "Hafiz Muhammad Akhtar.jpeg", img: "/Hafiz Muhammad Akhtar.jpeg" },
                { role: "Professor", name: "Hafiz Muhammad Azam.jpeg", img: "/Hafiz Muhammad Azam.jpeg" },
                { role: "Professor", name: "Majid Hussain.jpeg", img: "/Majid Hussain.jpeg" }
            ]
        },
        {
            id: "Department of Urdu",
            members: [
                { role: "Professor", name: "Muhammad Ramzan.jpeg", img: "/Muhammad Ramzan.jpeg" },
                { role: "Professor", name: "Haroon Ur Rashid.jpeg", img: "/Haroon Ur Rashid.jpeg" },
                { role: "Professor", name: "Imtiaz Hussain.jpeg", img: "/Imtiaz Hussain.jpeg" },
                { role: "Professor", name: "Dr. Muhammad Abrar Arshad.jpeg", img: "/Dr. Muhammad Abrar Arshad.jpeg" }
            ]
        },
        {
            id: "Department of Library Science",
            members: [
                { role: "Librarian", name: "Gohar Abdur Rehman.jpeg", img: "/Gohar Abdur Rehman.jpeg" }
            ]
        },
        {
            id: "Office of Suprintendent",
            members: [
                { role: "Head Clerk (Jr.)", name: "Muhammad Sohail Khan", img: "/Muhammad Sohail Khan.jpeg" },
                { role: "Senior Clerk", name: "Zahid Shehzad Mughal.jpeg", img: "/Zahid Shehzad Mughal.jpeg" },
                { role: "cake taker", name: "Babar Siddique", img: "/Babar Siddique.jpeg" }
            ]
        }
    ];

    const updatedFacultyList = facultyList.map((dept) => {
        const newMembers = dynamicFaculty
            .filter((faculty) => faculty.department === dept.id)
            .map((faculty) => ({
                role: faculty.designation,
                name: faculty.fullName,
                img: faculty.image
                    ? `http://localhost:3000/uploads/${faculty.image}`
                    : ''
            }));

        return {
            ...dept,
            members: [...dept.members, ...newMembers]
        };
    });

    dynamicFaculty.forEach((faculty) => {
        const exists = updatedFacultyList.some(
            (dept) => dept.id === faculty.department
        );

        if (!exists) {
            updatedFacultyList.push({
                id: faculty.department,
                members: [
                    {
                        role: faculty.designation,
                        name: faculty.fullName,
                        img: faculty.image
                            ? `http://localhost:3000/uploads/${faculty.image}`
                            : ''
                    }
                ]
            });
        }
    });

    return (
        <>
            <Chatbox />

            <Header />

            <div className="faculty-page-wrapper">
                <div className="container py-5">

                    <div className="text-center mb-5">
                        <p className="gallery-tag">GALLERY</p>

                        <h1 className="faculty-main-title">
                            Our Respected Faculty
                        </h1>
                    </div>

                    <div className="faculty-accordion-container">

                        {updatedFacultyList.map((dept, index) => (
                            <div
                                key={index}
                                className="accordion-item-wrapper"
                            >

                                <div
                                    className={`faculty-bar ${
                                        openSection.includes(dept.id)
                                            ? 'active-green'
                                            : 'white-bar'
                                    }`}
                                    onClick={() => {
                                        setOpenSection(
                                            openSection.includes(dept.id)
                                                ? openSection.filter(
                                                    id => id !== dept.id
                                                )
                                                : [...openSection, dept.id]
                                        );
                                    }}
                                >

                                    <span>{dept.id}</span>

                                    <span className="icon-style">
                                        {openSection.includes(dept.id)
                                            ? '-'
                                            : '+'}
                                    </span>

                                </div>

                                {openSection.includes(dept.id) && (
                                    <div className="faculty-content-area">

                                        <div className="faculty-grid-display-container">

                                            {dept.members.map(
                                                (member, memIndex) => (
                                                    <div
                                                        key={memIndex}
                                                        className="faculty-individual-card"
                                                    >

                                                        <div className="faculty-img-container">

                                                            {dept.id === "Principal" && (
                                                                <div className="faculty-circle-overlay"></div>
                                                            )}

                                                            <img
                                                                src={member.img}
                                                                alt={member.name}
                                                                className="faculty-img-style"
                                                            />

                                                        </div>

                                                        <div className="faculty-info-under-img">

                                                            <h3 className="faculty-member-name">
                                                                {member.name}
                                                            </h3>

                                                            <p className="faculty-member-role">
                                                                {member.role}
                                                            </p>

                                                        </div>

                                                    </div>
                                                )
                                            )}

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