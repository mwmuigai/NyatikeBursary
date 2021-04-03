import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container} from 'react-bootstrap'

import { Link } from 'react-router-dom'
const General = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)


    return (
        <Container>
            <Row>

          <img src={"data:image/png;base64,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"}/>
            <h1>THANK YOU FOR YOUR INTEREST. WE WILL GET IN TOUCH WITH YOU AFTER WE REVIEW YOUR APPLICATION.
                NOTE THAT ONLY SHORTLISTED CANDIDATES WILL BE CONTACTED</h1>
            </Row>
            {/*<Row>*/}
            {/*    <Col >*/}



            {/*        <Form >*/}
            {/*            <Form.Group controlId='name'>*/}
            {/*                <Form.Label>Name</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type='name'*/}
            {/*                    placeholder='Enter name'*/}
            {/*                    value={name}*/}
            {/*                    onChange={(e) => setName(e.target.value)}*/}
            {/*                ></Form.Control>*/}
            {/*            </Form.Group>*/}

            {/*            <Form.Group controlId='email'>*/}
            {/*                <Form.Label>Email Address</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type='email'*/}
            {/*                    placeholder='Enter email'*/}
            {/*                    value={email}*/}
            {/*                    onChange={(e) => setEmail(e.target.value)}*/}
            {/*                ></Form.Control>*/}
            {/*            </Form.Group>*/}

            {/*            <Form.Group controlId='password'>*/}
            {/*                <Form.Label>Password</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type='password'*/}
            {/*                    placeholder='Enter password'*/}
            {/*                    value={password}*/}
            {/*                    onChange={(e) => setPassword(e.target.value)}*/}
            {/*                ></Form.Control>*/}
            {/*            </Form.Group>*/}

            {/*            <Form.Group controlId='confirmPassword'>*/}
            {/*                <Form.Label>Confirm Password</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type='password'*/}
            {/*                    placeholder='Confirm password'*/}
            {/*                    value={confirmPassword}*/}
            {/*                    onChange={(e) => setConfirmPassword(e.target.value)}*/}
            {/*                ></Form.Control>*/}
            {/*            </Form.Group>*/}
            {/*            <Button type='submit' variant='primary'>*/}
            {/*                Update*/}
            {/*            </Button>*/}
            {/*        </Form>*/}

            {/*    </Col>*/}

            {/*</Row>*/}
        </Container>
    )
}

export default General
