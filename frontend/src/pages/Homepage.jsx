import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Header
        title="Academy Web"
        subtitle="Selamat datang di website resmi Academy Web, Sekolah Informatika dengan kompetensi keahlian Multimedia dan Rekayasa Perangkat Lunak"
      >
        <Link to="/profile/about" className="btn btn-outline-secondary mr-5">
          Tentang Sekolah
        </Link>

        <Link to="/auth/register" className="btn btn-outline-secondary">
          Daftar
        </Link>
      </Header>
    </div>
  );
}

export default Homepage;
