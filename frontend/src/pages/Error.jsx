import React from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";

function Error() {
  return (
    <Header
      title="404 Not Found"
      subtitle="Ups.. Halaman yang anda cari, tidak tersedia"
    >
      <Button size="lg" variant="outline-secondary" href="/">
        Kembali ke Beranda
      </Button>
    </Header>
  );
}

export default Error;
