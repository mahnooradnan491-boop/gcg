import React from 'react';
import './admin.css';

function AchievementManagement() {
    const achievements = [
        { id: 1, title: "1st Position in Coding Comp", studentName: "Zainab Fatima", year: "2025" },
        { id: 2, title: "Best College Award", studentName: "Management Team", year: "2026" },
        { id: 3, title: "Cricket Tournament Winner", studentName: "College Team", year: "2026" },
    ];

    return (
        <div className="container-fluid bg-light min-vh-100 p-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <h3 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.6rem' }}>Achievement Management</h3>

                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Achievement Title</th>
                                <th className="py-3">Winner/Student</th>
                                <th className="py-3">Year</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {achievements.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{item.id}</td>
                                    <td className="py-3 fw-semibold text-dark">{item.title}</td>
                                    <td className="py-3 text-secondary">{item.studentName}</td>
                                    <td className="py-3 text-secondary">{item.year}</td>
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

export default AchievementManagement;