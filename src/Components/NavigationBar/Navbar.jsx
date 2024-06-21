// import React from 'react'
import './NavBar.css'
import logo1 from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav py-3">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo1} alt="EasyBilz-logo" width="100" className="img-fluid" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">What we do</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Contact Us</a>
                    </li>
                </ul>
                <div className="d-inline-flex flex-wrap">
                    <a href="#" className="btn btn-login border border-dark rounded-pill px-5 mx-2" type="submit">Login</a>
                    <a href="#" className="btn btn-register border border-dark rounded-pill px-5 mx-2 bg-light"
                        type="submit">Register</a>
                </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
