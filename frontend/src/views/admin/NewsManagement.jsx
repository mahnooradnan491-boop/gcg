import React from 'react';
import './admin.css';

function NewsManagement() {
    const newsList = [
        { id: 1, date: "5/8/2026", title: "Some title goes here", postedBy: "John Doe" },
        { id: 2, date: "5/9/2026", title: "Some title goes here", postedBy: "Rubby Jail" },
        { id: 3, date: "5/15/2026", title: "Some title goes here", postedBy: "Foe Damn" },
        { id: 4, date: "5/20/2026", title: "Some title goes here", postedBy: "Hol Adam" },
    ];

    return (
        <div className="container-fluid bg-light min-vh-100 p-4">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <h3 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.6rem' }}>News Management</h3>

                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Date</th>
                                <th className="py-3">Title</th>
                                <th className="py-3">Posted By</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newsList.map((news) => (
                                <tr key={news.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{news.id}</td>
                                    <td className="py-3 text-secondary">{news.date}</td>
                                    <td className="py-3 fw-semibold text-dark">{news.title}</td>
                                    <td className="py-3 text-secondary">{news.postedBy}</td>
                                    <td className="py-3 text-end px-3">
                                        <button className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0 me-3" style={{ fontSize: '0.95rem' }}>View</button>
                                        <button className="btn btn-link text-decoration-underline text-danger fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>Remove</button>
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

export default NewsManagement;