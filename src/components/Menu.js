import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = ({ user, logout }) => {
  const padding = {
    paddingRight: 5,
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/">Courses</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/companies">Companies</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/addcourse">Add a course</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span" style={padding}>
              {user.name} logged in
            </Nav.Link>
            <Button onClick={logout} >
            Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Menu