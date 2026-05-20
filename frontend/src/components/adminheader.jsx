function AdminHeader() {
    return (
        <header className="mb-5 d-flex justify-content-between align-items-center">
            <h1 className="fw-bold text-dark display-6" style={{ letterSpacing: '-1px' }}>
                Dashboard
            </h1>
            <div className="fs-5">Welcome, <span className="fw-bold">Admin</span></div>
        </header>
    )
}

export default AdminHeader