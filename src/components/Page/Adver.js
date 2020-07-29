import React, { Component } from 'react';
import { Button, Card, ListGroup, Alert } from 'react-bootstrap';
//import { SoapService } from './Api.ts';
const image = require('../Images/job.png');
var url = "https://localhost:44339/WebService-EJI.asmx";
var data;
var myData;
var List = []
export default class Adver extends Component {
    componentDidMount() {
        fetch(url + '/' + "Jobs", {
            method: 'POST',
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
        })
            .then(response => response.json())
            .then((datam) => {
                /**
                 * @returns {data JSON}
                 */
                console.log("then datası", datam)
                data = datam;
                for (let i = 0; i < data.length; i++) {
                    List.push(data[i])
                }
                console.log("listem: ", List)
                console.log("benim data", data)
            })
    }

    Alert(id,job) {
        console.log(id+" "+job)
    }

renderItem = () => {
    return List.map(data => {
        return (
            <Card style={{ width: '18rpx', marginLeft: '50px', marginTop: '50px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{data.job_name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button id={data.id} variant="primary" onClick={()=>this.Alert(data.id,data.job_name)}>Enter Jobs</Button>
                </Card.Body>
            </Card>
        )
    })
}
render() {

    return (
        <div className="container" style={{ flexDirection: 'row', display: 'flex', flexWrap: 'wrap' }}>
            {this.renderItem()}
        </div>
    )
}
}
