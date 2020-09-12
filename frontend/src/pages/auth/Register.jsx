import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Title from "../../components/Title";

function Register() {
  return (
    <div className="mt-5">
      <Title title="Pendaftaran Akun" />

      <div className="container mt-5 centerItem">
        <div className="row">
          <div className="col-md-6">
            <Form>
              <Form.Group controlId="registerForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="contoh@gmail.com" />
              </Form.Group>
              <Form.Group controlId="registerForm.ControlInput2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="registerForm.ControlSelect1">
                <Form.Label>Pilih Jurusan</Form.Label>
                <Form.Control as="select">
                  <option>Multimedia</option>
                  <option>Rekayasa Perangkat Lunak</option>
                </Form.Control>
              </Form.Group>
            </Form>

            <Button variant="primary">Daftar</Button>
            <small className="ml-5">
              Sudah punya Akun? Silahkan <Link to="/auth/login">login</Link>{" "}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
