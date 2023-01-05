import {Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap';
import "@fontsource/montserrat"
import '../../../assets/css/home.css';
import Logo from "../../../assets/images/logo/logo.svg";
import ShoppingBag from "../../../assets/images/icons/shoppingBag.svg";
import Search from "../../../assets/images/icons/Search.svg";

function Header() {

  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='navbar-custom'>
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="https://iquitnotes.com/">
          <Image src={Logo}/>
        </Navbar.Brand>
        <Image src={Search} width="24" className='mobile-icon'/>
        <Image src={ShoppingBag} width="24" className='mobile-icon'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='me-3'>Win $1M</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Buy NFTs</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Gallery</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Leaderboard</Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown"  className='me-3'>
              <NavDropdown.Item href="#action/3.1">Origin Story</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                iQuitNotes NFTs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Career Consulting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Work Glossary</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className='me-3'>News</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Shop</Nav.Link>
            <Nav.Link href="#pricing" className='me-3'>Account</Nav.Link>
          </Nav>
          <Nav className='desktop-icon'>
            <Nav.Link href="#deets">
              <Image src={Search} width="24" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Image src={ShoppingBag} width="24" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
