import React from 'react'
import {Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav>
            <h3 style={{ color: 'orange' }}>EASY JOB INTERVIEW</h3>
            <ul className="nav-link">
                <li>
                    <Link to="/Main/Adver">
                        <button className="nav-button">
                        Businesses
                    </button>
                    </Link>

                </li>
                <li>
                    <Link to="/Main/Contact">
                        <button className="nav-button">
                            Contact
                        </button>
                    </Link>

                </li>

                <li>
                    <Link to="/Main/Profile">
                        <button className="nav-button">
                            Profile
                        </button>
                    </Link>

                </li>

                <li>
                    <Dropdown style={{marginLeft:'40px'}}>
                        <Dropdown.Toggle variant="" id="dropdown-basic" style={{backgroundColor:'white'}}>
                            <i className="fa fa-ellipsis-v fa-2x" aria-hidden="true" style={{color:'black'}}></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor:''}}>
                            <Dropdown.Item href="/Login" style={{backgroundColor:'gray',color:'white'}}>Exit Account</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;



