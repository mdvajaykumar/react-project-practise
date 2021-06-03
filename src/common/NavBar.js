import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/employee-list">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/employee-create">
            CreateEmployee
          </Nav.Link>
          <Nav.Link as={Link} to="/employee-list">
            EmployeeList
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
