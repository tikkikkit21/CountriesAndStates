import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar({ home, links }) {
    const barLinks = links.map(link => {
        return (
            <Nav.Link href={link.path}>{link.name}</Nav.Link>
        );
    });

    return (
        <Navbar className="p-2" bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="/">{home}</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {barLinks}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;