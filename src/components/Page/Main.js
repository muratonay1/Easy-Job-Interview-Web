import React, { Component } from 'react'
import Nav from './TopNavbar';
import '../CSS/Main.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Adver from './Adver';
import Contact from './Contact';
import Switch from 'react-bootstrap/esm/Switch';
export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Nav />
                </div>

                <div className="Pages">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/Adver"  component={Adver} />
                            <Route path="/Contact"  component={Contact} />
                        </Switch>
                        
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}