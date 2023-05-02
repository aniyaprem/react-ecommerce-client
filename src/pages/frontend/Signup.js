import { Row, Container, Col, Card, Form, Button } from "react-bootstrap";

const Signup = ()=>{
    return(
        <Container>
            <Row>
                <Col xxl={7} xl={7} lg={7} md={9} sm={10} xs={11} className="m-auto py-4">
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">
                            <Card.Title className="mb-3 text-capitalize">register here</Card.Title>
                            <Form method="post">
                                <Row>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='text' name="name" placeholder="Ener Name"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='email' name="email" placeholder="Ener Email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type='number' name="phone" placeholder="Ener Phone"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select name="country">
                                            <option value="">Select Country</option>
                                            <option value="">Us</option>
                                            <option value="">India</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select name="state">
                                            <option value="">Select State</option>
                                            <option value="">Rajasthan</option>
                                            <option value="">Maharastra</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>City</Form.Label>
                                        <Form.Select name="city">
                                            <option value="">Select City</option>
                                            <option value="">Delhi</option>
                                            <option value="">Mumbai</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' name="password" placeholder="Ener Password"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type='password' name="confirm_password" placeholder="Ener Confirm Password"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button className="btn btn-success rounded-0 text-uppercase">login</Button>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;