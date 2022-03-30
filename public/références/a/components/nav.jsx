import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome, FaTools } from "react-icons/fa";

const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Logo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home"><FaHome /> Home</NavLink>
                    </li>
                    <li className="nav-item text-right">
                        <NavLink className="nav-link" to="#">Link</NavLink>
                    </li>
                </ul>
                <NavLink to='/admin' className='text-white text-decoration-none'><FaTools /> Admin</NavLink>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default Nav