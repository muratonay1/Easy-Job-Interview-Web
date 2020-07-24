import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <h3 style={{ color: 'orange' }}>EASY JOB INTERVIEW</h3>
            <ul className="nav-link">
                <li>
                    <Link to="/Login">
                        <button className="nav-button">
                            Login
                    </button>
                    </Link>

                </li>
                <li>
                    <Link to="/Register">
                        <button className="nav-button">
                            Register
                        </button>
                    </Link>

                </li>
            </ul>
        </nav>
    )
}
export default Nav;



