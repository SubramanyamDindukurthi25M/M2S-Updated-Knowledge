import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav
                className="navbar navbar-dark bg-dark navbar-expand-sm"
            >
                <div className="container">
                    <Link
                        to='/'
                        className='navbar-brand'
                    >
                        Redux-Toolkit
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to='/users'
                                    className='nav-link'
                                >
                                    Users 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/counter'
                                    className='nav-link'
                                >
                                    Counter 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/employees'
                                    className='nav-link'
                                >
                                    Employees 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;