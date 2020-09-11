import React from "react";
import Header from "../components/Header";
import { Button } from "react-bootstrap";

function Enrollment() {
  return (
    <div>
      <Header
        title="Pendaftaran Academy"
        subtitle="Jadwal belajar Academy dimulai tanggal 21 Februari 2021"
      >
        <p>Anda perlu registrasi Akun untuk mendaftar</p>
        <Button href="/auth/register" size="lg" variant="outline-secondary">
          Daftar Sekarang
        </Button>
      </Header>
    </div>
  );
}

export default Enrollment;
