import React from "react";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import Services from "../components/Services";

function Homepage() {
  return (
    <div>
      <Header
        title="Academy Web"
        subtitle="Selamat datang di website resmi Academy Web, Sekolah Informatika dengan kompetensi keahlian Multimedia dan Rekayasa Perangkat Lunak"
      >
        <Button
          variant="outline-secondary"
          href="/profile/about"
          size="lg"
          className="mr-3"
        >
          Tentang Sekolah
        </Button>
        <Button variant="outline-secondary" href="/profile/about" size="lg">
          Daftar
        </Button>
      </Header>

      <Services />
    </div>
  );
}

export default Homepage;
