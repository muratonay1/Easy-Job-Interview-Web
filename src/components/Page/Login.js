import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const Animation = posed.div({
    visible:{
        opacity:1
    },
    hidden:{
        opacity:0
    }
})
export default class Login extends Component {
    state={
        visible:false
    }
    componentDidMount(){
        this.setState({visible:true})
    }
    render() {
        
        return (
            <Animation pose={this.state.visible ? "visible":"hidden"}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            <i class="fa fa-sign-in fa-1x" aria-hidden="true" style={{ color: 'purple' }}></i> Login EJI
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="maildiv" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <i class="fa fa-envelope fa-2x" aria-hidden="true"style={{color:'#4285F4'}}></i>
                            <Form.Control type="email" placeholder="Enter E-Mail"style={{marginLeft:10}}/>
                        </div>

                        <div style={{ flexDirection: 'row',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            <i class="fa fa-key fa-2x" aria-hidden="true" style={{marginTop:5,color:'#4285F4'}}></i>
                            <Form.Control type="text" placeholder="Enter Password" style={{ marginTop: '15px',marginLeft:15 }} />
                        </div>
                        <Link>
                            <p>Forget Password</p>
                        </Link>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" style={{width:'500px',height:'45px'}}>Login </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Animation>
        )
    }
}