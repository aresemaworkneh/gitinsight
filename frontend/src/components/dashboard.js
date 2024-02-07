// Dashboard 

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Container from  "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {LineChart, PieChart} from "react-chartjs-2";

function Dashboard() {
return (
    <Container fluid>
        <Row className="my-4">
            <Col>
                <h2>Dashboard</h2>
            </Col>
        </Row>
        <Row>
            <Col md="4" className="mb-4">
                <Card>
                    <Card.Body>
                        <Card.Title> User Metrics</Card.Title>
                        <Card.Text> User metrics related to user  </Card.Text>
                    </Card.Body>
        </Card>
   </Col>
    <Col md="4" className="mb-4">
    <Card>
        <Card.Body>
            <Card.Title> Code ownership</Card.Title>
        <Card.Text> Metrics related to code ownership   </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    <Col md="4" className="mb-4">
    <Card>
        <Card.Body>
            <Card.Title> Code ownership</Card.Title>
        <Card.Text> Metrics related to code ownership   </Card.Text>
    </Card.Body>
    </Card>
    </Col>
   </Row>
   </Container>
);

}
export default Dashboard