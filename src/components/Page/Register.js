import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import posed from 'react-pose';

const Animation = posed.div({
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
})
export default class Register extends Component {
    state = {
        visible: false
    }
    componentDidMount() {
        this.setState({ visible: true })
    }
    render() {
        return (
            <Animation pose={this.state.visible ? "visible" : "hidden"}>
                <Link to="/Login">
                    <button className="nav-button">
                        Login
                    </button>
                </Link>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            <i className="fa fa-user-plus" aria-hidden="true" style={{ color: 'purple' }}></i> Register EJI
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="maildiv" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <i class="fa fa-envelope fa-2x" aria-hidden="true" style={{ color: '#4285F4' }}></i>
                            <Form.Control type="email" placeholder="Enter email" style={{ marginLeft: 10 }} />
                        </div>

                        <div className="maildiv" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <i className="fa fa-user fa-2x" aria-hidden="true" style={{ color: '#4285F4' }}></i>
                            <Form.Control type="email" placeholder="First Name" style={{ marginLeft: 19 }} />
                        </div>

                        <div className="maildiv" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <i className="fa fa-user fa-2x" aria-hidden="true" style={{ color: '#4285F4' }}></i>
                            <Form.Control type="email" placeholder="Last Name" style={{ marginLeft: 19 }} />
                        </div>

                        <div className="maildiv" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <i className="fa fa-key fa-2x" aria-hidden="true" style={{ color: '#4285F4' }}></i>
                            <Form.Control type="text" placeholder="Enter Password" style={{ marginLeft: 10 }} />
                        </div>

                        <div className="maildiv" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <i className="fa fa-key fa-2x" aria-hidden="true" style={{ color: '#4285F4' }}></i>
                            <Form.Control type="text" placeholder="Enter Confirm Password" style={{ marginLeft: 10 }} />
                        </div>





                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" style={{ width: '500px', height: '45px' }}>Register Now</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Animation>

        )
    }
}

