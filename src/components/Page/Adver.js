import React, { Component } from 'react'
import { Modal, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';
const image = require('../Images/job.png')
export default class Adver extends Component {
    async getDataFetch(){
        const response =
          await fetch("http://192.168.1.5:44339/WebService-EJI.asmx/HelloWorld",
            { headers: {'Content-Type': 'application/json'}}
          )
        console.log(await response.json())
    }
    componentDidMount(){
        this.getDataFetch()
    }
    renderItem = () => {
        return (
            <Card style={{ width: '18rpx', marginLeft: '50px', marginTop: '50px', resize: 'contain' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Bilişim</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
    render() {
        return (
            <div className="container" style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap' }}>
                <Card style={{ width: '18rpx', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginLeft: '50px', marginTop: '50px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Bilişim</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
