import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css"; // Import custom CSS

function Dashboard() {
    return (
        <Container fluid className="dashboard">
            <Row className="my-4">
                <Col>
                    <h2 className="dashboard-title">Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="dashboard-card">
                        <Card.Body>
                            <Card.Title>User Metrics</Card.Title>
                            {/* Placeholder for chart */}
                            <div className="chart-placeholder">Chart 1</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="dashboard-card">
                        <Card.Body>
                            <Card.Title>Code Ownership</Card.Title>
                            {/* Placeholder for chart */}
                            <div className="chart-placeholder">Chart 2</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="mb-4">
                    <Card className="dashboard-card">
                        <Card.Body>
                            <Card.Title>Other Metrics</Card.Title>
                            {/* Placeholder for chart */}
                            <div className="chart-placeholder">Chart 3</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* Additional rows and columns for more content */}
        </Container>
    );
}

export default Dashboard;
