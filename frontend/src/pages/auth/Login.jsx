import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Title from "../../components/Title";

function Login() {
  return (
    <div className="mt-5">
      <Title title="Masuk" />

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
            </Form>

            <Button variant="primary">Masuk</Button>
            <small className="ml-5">
              Belum punya Akun? Silahkan <Link to="/auth/register">daftar</Link>{" "}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
