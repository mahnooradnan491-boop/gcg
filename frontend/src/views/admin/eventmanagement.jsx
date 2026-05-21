import React from 'react';

function EventManagement() {
    const events = [
        { id: 1, title: "Annual Sports Day", date: "12/05/2026", venue: "Main Ground" },
        { id: 2, title: "Tech Exhibition", date: "20/05/2026", venue: "IT Lab" },
        { id: 3, title: "Convocation 2026", date: "05/06/2026", venue: "Auditorium" },
    ];

    return (
        <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold m-0 text-dark" style={{ fontSize: '1.6rem' }}>Event Management</h3>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                    <thead className="table-light text-muted">
                        <tr>
                            <th className="py-3 px-3">#</th>
                            <th className="py-3">Event Title</th>
                            <th className="py-3">Date</th>
                            <th className="py-3">Venue</th>
                            <th className="py-3 text-end px-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((item) => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                <td className="py-3 px-3 fw-bold text-muted">{item.id}</td>
                                <td className="py-3 fw-semibold text-dark">{item.title}</td>
                                <td className="py-3 text-secondary">{item.date}</td>
                                <td className="py-3 text-secondary">{item.venue}</td>
                                <td className="py-3 text-end px-3">
                                    <button className="btn btn-link text-decoration-underline text-dark fw-semibold p-0 border-0" style={{ fontSize: '0.95rem' }}>
                                        Add
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EventManagement;