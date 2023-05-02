import { Row, Container, Col, Card, Form, Button } from "react-bootstrap";

const Login = ()=>{
    return(
        <Container>
            <Row>
                <Col xxl={5} xl={5} lg={5} md={5} sm={6} xs={11} className="m-auto py-4">
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">
                            <Card.Title className="mb-3 text-capitalize">login here</Card.Title>
                            <Form method="post">
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' name="email" placeholder="Ener Email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' name="password" placeholder="Ener Password"/>
                                </Form.Group>
                                <Form.Group>
                                    <Button className="btn btn-success rounded-0 text-uppercase">login</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;