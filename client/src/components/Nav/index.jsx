import React from 'react';

import '../Nav/nav.css'

const Nav = ({ currentPage, handlePageChange }) => {
    return (

        <nav className="navbar navbar-expand-lg py-3 mb-4" id='navStyling'>
            <div className="container">

                <a href="#about" className="navbar-brand fw-bold fs-2" onClick={() => handlePageChange('About')} id='navHeader' >Jose Barreto</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span
                    className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto ml-3">
                        <li className="nav-item">
                            <a href="#about" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('About')}> About <i className="bi bi-house"></i> </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')}> Contact <i className="bi bi-person-lines-fill"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Portfolio')} > Portfolio <i className="bi bi-files"></i> </a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Resume')} > Resume <i className="bi bi-files"></i> </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Nav;