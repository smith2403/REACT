import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_user = {
      name,
      email,
      password,
    };
    axios
      .post("http://localhost:4000/api/user/", new_user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center display-4">Sign UP </h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="formId1">Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="formId1">Email</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="formId1">Password</label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
