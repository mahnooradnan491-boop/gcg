import React from 'react';
import './admin.css';

function ContactManagement() {
    const queries = [
        { id: 1, name: "John Doe", subject: "Some subject goes here" },
        { id: 2, name: "Rubby Jail", subject: "Some subject goes here" },
        { id: 3, name: "Foe Damn", subject: "Some subject goes here" },
        { id: 4, name: "Hol Adam", subject: "Some subject goes here" },
    ];

    return (
        <div className="container-fluid bg-light min-vh-100 p-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <h3 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.6rem' }}>Query Management</h3>

                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Full Name</th>
                                <th className="py-3">Subject</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queries.map((query) => (
                                <tr key={query.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{query.id}</td>
                                    <td className="py-3 fw-semibold text-dark">{query.name}</td>
                                    <td className="py-3 text-secondary">{query.subject}</td>
                                    <td className="py-3 text-end px-3">
                                        <button className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>
                                            reply
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

export default ContactManagement;