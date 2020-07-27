import React, { Component } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { SoapService } from './Api.ts';
import { render } from 'react-dom';
const image = require('../Images/job.png');
var url = "https://localhost:44339/WebService-EJI.asmx";
var data;
var myData;
var List = []
export default class Adver extends Component {
    componentDidMount() {

        data = SoapService.withPostParameter(url, "Id", ({
            JobName: 'deneme222',
            JobId: 5
        }))
        this.renderCard()

        //data = SoapService.withoutParameter("url","Jobs")
    }
    renderCard() {
        myData = Promise.resolve(data);
        myData.then(function (params) {
            for (let i = 0; i < params.length; i++) {
                List.push(params[i])
            }

        })


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
                        <Button variant="primary">Enter Jobs</Button>
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
