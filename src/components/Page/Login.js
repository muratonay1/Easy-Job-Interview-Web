import React, { Component } from 'react'
import { Button, Form, Modal, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import posed from 'react-pose';
import loginCheck from '../Control/routeControl';
import Control from '../../App';
const Animation = posed.div({
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
})
export default class Login extends Component {
    state = {
        visible: true,
        e_mail: '',
        navigate: ''
    }
    componentDidMount() {
        this.setState({ visible: true })
    }
    alertmy(value) {
        return (
            <Alert variant="success">
                <Alert.Heading>{value}</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                    alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice
                    and tidy.
                </p>
            </Alert>
        )
    }
    loginHandler = () => {
        console.log("login click");
        loginCheck.e_mail = "murat"
        loginCheck.password = "123123"
        console.log(loginCheck.e_mail, loginCheck.password)

        //return <Link to="/Main"></Link>

    }
    render() {

        return (
            <Animation pose={this.state.visible ? "visible" : "hidden"}>
                <Link to="/Register">
                    <button className="nav-button">
                        Register
                        </button>
                </Link>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            <i className="fa fa-sign-in fa-1x" aria-hidden="true" style={{ color: 'purple' }}></i> Login EJI
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="maildiv" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <i className="fa fa-envelope fa-2x" aria-hidden="true" style={{ color: '#4285F4' }}></i>
                            <Form.Control type="email" placeholder="Enter E-Mail" style={{ marginLeft: 10 }}
                            />
                        </div>

                        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <i className="fa fa-key fa-2x" aria-hidden="true" style={{ marginTop: 5, color: '#4285F4' }}></i>
                            <Form.Control type="text" placeholder="Enter Password" style={{ marginTop: '15px', marginLeft: 15 }} />
                        </div>
                        <Link to="">
                            <p>Forget Password</p>
                        </Link>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/Main">
                            <Button variant="primary" style={{ width: '465px', height: '45px' }}
                                onClick={() => { this.loginHandler() }
                                }
                            >Login </Button>

                        </Link>
                    </Modal.Footer>
                </Modal.Dialog>
            </Animation>
        )
    }
}