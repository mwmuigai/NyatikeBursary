import React, {useState, useEffect} from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'

import {Link} from 'react-router-dom'

const General = () => {




    return (
        <Container className="flex-container">

            <Row className="row" >
                <Col  className="flex-item" sm={6} xs={6} md={6} lg={4} xl={3}>
                    <img src={'https://www.mkufoundation.org/images/donorlogos/1/cdf-official-logo.png'}/>
                </Col>
                <Col className="flex-item" sm={6} xs={6} md={6} lg={4} xl={3}>
                    <p>National Government Constituencies Development Fund </p>
                       <p> Nyatike Constituency</p>
                       <p> NG- CDF Office Building Wath Ong’er Trading Centre</p>
                       <p> Macalder, Kenya</p>
                       <p> Tel: 0727-606-394/0725-833-202</p>
                       <p> Email: ngcdfnyatike@ngcdf.go.ke /Website: www.cdf.go.ke</p>
                </Col>
            </Row>

        </Container>
    )
}

export default General
