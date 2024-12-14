export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Books </a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/form">Form</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/report">Report</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>

    )

}