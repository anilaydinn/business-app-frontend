import React, { useState } from "react";

import { Form, FormGroup, Label, Input } from "reactstrap";
import { login } from "../../api/index";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <Form onSubmit={(e) => loginHandler(e)}>
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                required={true}
              />
            </FormGroup>
            <FormGroup className="mt-4">
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
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
