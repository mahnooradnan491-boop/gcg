import React from 'react';
import './admin.css'; 

function AdmissionManagement() {
   
    const admissions = [
        { id: 1, name: "John Doe", fatherName: "Doe Damn", program: "BSCS", timing: "Morning" },
        { id: 2, name: "Rubby Jail", fatherName: "Foe Adam", program: "BSIT", timing: "Morning" },
        { id: 3, name: "Foe Damn", fatherName: "Hol Jail", program: "BSSE", timing: "Evening" },
        { id: 4, name: "Hol Adam", fatherName: "Rubby John", program: "BSCS", timing: "Evening" },
    ];

    return (
        <div className="container-fluid bg-light min-vh-100 p-4">
            
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold m-0 text-dark" style={{ fontSize: '1.6rem' }}>Admission Management</h3>
                    <div>
                        <button className="btn btn-outline-secondary btn-sm me-2 rounded-3 px-4 py-2 fw-semibold">Approved</button>
                        <button className="btn btn-outline-secondary btn-sm rounded-3 px-4 py-2 fw-semibold">Decline</button>
                    </div>
                </div>

                
                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Full Name</th>
                                <th className="py-3">Father Name</th>
                                <th className="py-3">Program</th>
                                <th className="py-3">Timing</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admissions.map((student) => (
                                <tr key={student.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{student.id}</td>
                                    <td className="py-3 fw-semibold text-dark">{student.name}</td>
                                    <td className="py-3 text-secondary">{student.fatherName}</td>
                                    <td className="py-3 text-secondary">{student.program}</td>
                                    <td className="py-3 text-secondary">{student.timing}</td>
                                    <td className="py-3 text-end px-3">
                                        
                                        <button className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>
                                            Show
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdmissionManagement;