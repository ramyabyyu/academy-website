import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { MdSchool } from "react-icons/md";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <MdSchool /> Academy Web
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Beranda</Nav.Link>
          <Nav.Link href="/pendaftaran">Pendaftaran</Nav.Link>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/profile/about">
              Tentang Sekolah
            </NavDropdown.Item>
            <NavDropdown.Item href="/profile/visi">Visi Misi</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Kompetensi Keahlian" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/major/multimedia">
              Multimedia
            </NavDropdown.Item>
            <NavDropdown.Item href="/major/rpl">
              Rekayasa Perangkat Lunak
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/auth/register">Daftar</Nav.Link>
          <Nav.Link eventKey={2} href="/auth/login">
            Masuk
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
