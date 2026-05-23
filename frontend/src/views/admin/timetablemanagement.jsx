import './admin.css'

function TimetableManagement() {
    const timetables = [
        { id: 1, class: "BSCS 4th", semester: "4th", department: "Computer Science" },
        { id: 2, class: "BSIT 2nd", semester: "2nd", department: "Information Technology" },
        { id: 3, class: "BSSE 6th", semester: "6th", department: "Software Engineering" },
    ]

    return (
        <div className="container-fluid bg-light gx-0">
            <div className="bg-white p-4 rounded-4 shadow-sm border-0 mt-3">
                <h3 className="fw-bold mb-4 text-dark" style={{ fontSize: '1.6rem' }}>Timetable Management</h3>

                <div className="table-responsive">
                    <table className="table table-hover align-middle m-0" style={{ borderTop: '1px solid #f0f0f0' }}>
                        <thead className="table-light text-muted">
                            <tr>
                                <th className="py-3 px-3">#</th>
                                <th className="py-3">Class / Program</th>
                                <th className="py-3">Semester</th>
                                <th className="py-3">Department</th>
                                <th className="py-3 text-end px-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetables.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                                    <td className="py-3 px-3 fw-bold text-muted">{item.id}</td>
                                    <td className="py-3 fw-semibold text-dark">{item.class}</td>
                                    <td className="py-3 text-secondary">{item.semester}</td>
                                    <td className="py-3 text-secondary">{item.department}</td>
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
        </div>
    )
}

export default TimetableManagement