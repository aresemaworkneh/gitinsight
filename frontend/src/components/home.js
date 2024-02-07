import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Container from  "react-bootstrap/container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
    return (
        <Container className="mt-2">
            <h1 >Welcome to Gitinsight !</h1>
            
        
            <p className="mb-"> Gitinsight shows the insights of your GitHub repositories, numbers of commits to show code ownership</p>
           <br> 
            </br>
           <Row>
            <Col md="5" className ="mb-5" >

        <Card border="primary"  style={{ width: '30rem'  }}>
            <Card.Body>
                <Card.Title>Metrics</Card.Title>
                <Card.Text>
                    Metrics shows the insights of your GitHub repositories, numbers of commits to show code ownership
                </Card.Text>
<a href="/metrics" className="btn btn-primary"> Metrics</a>
            </Card.Body>
        </Card>
        </Col>
        <Col  md="5" className ="mb-5">
        <Card style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title>Dashboard</Card.Title>
                <Card.Text>
                    Dashboard shows the insights of your GitHub repositories, numbers of commits to show code ownership
                </Card.Text>
<a href="/dashboard" className="btn btn-primary"> Dashboard</a>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        


        </Container>

    );
}

export default Home;