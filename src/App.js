import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'

import './App.css'
import Home from "./Components/Home"
import Header from "./Components/Header"
import Instructions from "./Components/Instructions";
function App() {
    return (
        <Router>
            <Container>


                <Header/>
                <Instructions/>
                <Route path="/" component={Home}></Route>
            </Container>
        </Router>
    )
        ;
}

export default App;
