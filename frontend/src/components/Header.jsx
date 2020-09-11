import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Header({ title, subtitle, children }) {
  return (
    <Jumbotron fluid className="text-center bg-dark text-light front">
      <Container>
        <h1 className="mt-5">{title}</h1>
        <p className="mb-5 lead">{subtitle}</p>

        {children}
      </Container>
    </Jumbotron>
  );
}

export default Header;
