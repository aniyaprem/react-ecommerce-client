import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = ()=>{
    return(
      <Navbar className="header" bg="dark" expand="md">
        <Container>
          <Link className="navbar-brand" to="/">React-Bootstrap</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>about</Link>
              <Link to="/" className='nav-link'>shop</Link>
              <Link to="/" className='nav-link'>contact</Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item to="/">Action</NavDropdown.Item>
                <NavDropdown.Item to="/">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;