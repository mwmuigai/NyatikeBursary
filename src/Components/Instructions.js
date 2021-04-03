import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'

import {Link} from 'react-router-dom'

const General = () => {




    return (
        <Container className="flex-container">

           <Row>
                <Col >
                    <h1>NYATIKE BURSARY APPLICATION FORM</h1>
                    <p>INSTRUCTIONS: Kindly provide your information in legible CAPITAL letters.<br/>
                    NB: Submission of incomplete form may lead to disqualification.
                        </p>
                </Col>
            </Row>

        </Container>
    )
}

export default General
