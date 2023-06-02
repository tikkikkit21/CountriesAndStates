import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type LinkObj = {
    path: string,
    name: string
}

type Props = {
    home: string,
    links: Array<LinkObj>
}

function MyNavbar({ home, links }: Props) {
    const barLinks = links.map(link => {
        return (
            <Nav.Link key={link.name} href={link.path}>{link.name}</Nav.Link>
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