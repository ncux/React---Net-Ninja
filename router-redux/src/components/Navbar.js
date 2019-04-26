import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';   // NavLink adds the class of "active" to the a tags


function Navbar() {

    return (
        <div className="App">

            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a href="/" className="brand-logo">This Company</a>
                    <ul className="right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>


        </div>
    );
}

export default withRouter(Navbar);        // use the withRouter function to perform Programmatic Redirects
