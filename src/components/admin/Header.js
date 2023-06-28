import {Navbar, Container, Nav, Image, NavDropdown  } from 'react-bootstrap';

const Header = ()=>{
    return (
        <Navbar bg="dark" expand="md" className="header-nav">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-between">
                    <Nav className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                    </Nav>
                    <Nav className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                            <NavDropdown className="py-0" title={<Image src="holder.js/171x180" roundedCircle alt="P"/> } id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;