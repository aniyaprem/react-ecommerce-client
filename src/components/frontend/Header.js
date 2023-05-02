import {Link} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../assets/imgs/logo.png'

const Header = ()=>{
    return(
      <Navbar className="header" bg="dark" expand="md">
        <Container>
          <Link className="navbar-brand p-0 mb-1" to="/">
            <img src={logo} width="105" alt="img"/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
            <Nav>
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/about" className='nav-link'>about</Link>
              <Link to="/" className='nav-link'>shop</Link>
              <Link to="/" className='nav-link'>blog</Link>
              <Link to="/" className='nav-link'>contact</Link>
              {/* <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item to="/">Action</NavDropdown.Item>
                <NavDropdown.Item to="/">Something</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Link to="/login" className='nav-link'><i className="bi bi-box-arrow-in-right"></i></Link>
              <Link to="/signup" className='nav-link'><i className="bi bi-person-add"></i></Link>
              <Link to="/" className='nav-link'><i className="bi bi-cart-plus"></i></Link>
              <Link to="/about" className='nav-link'><i className="bi bi-suit-heart"></i></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;