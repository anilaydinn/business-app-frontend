import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { register } from "../../api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    let resp;
    if (password === rePassword) {
      await register(username, password);
    }

    if (resp === false) {
      console.log("error");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <Form onSubmit={(e) => handleRegister(e)}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                required={true}
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Label>Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required={true}
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Label>Re-Password</Label>
              <Input
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                placeholder="Re-Password"
                required={true}
              />
            </FormGroup>
            <div className="d-flex flex-row-reverse">
              <input
                type="submit"
                value="Login"
                className="btn btn-success mt-3"
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
