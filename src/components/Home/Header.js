import React from "react"
import { Navbar, Container } from "react-bootstrap"

function Header() {
 return (
  <Navbar bg="primary" variant="dark">
   <Container>
    <Navbar.Brand href="#home">Simple Add to Cart</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
   </Container>
  </Navbar>
 )
}

export default Header
