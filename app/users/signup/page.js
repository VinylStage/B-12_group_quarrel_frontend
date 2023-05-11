"use client";
import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  async function handleSignup() {
    console.log(name, password, password2);
    const response = await fetch("http://127.0.0.1:8000/users/signup/", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password2: password2,
      }),
    });
  }

  return (
    <div id="footer-wrapper">
      <div id="footer" className="container">
        <header className="major">
          <h2>Sign up</h2>
        </header>
        <div
          className="row"
          style={{ justifyContent: "center", marginTop: "-20px" }}
        >
          <section className="col-6 col-12-narrower">
            <form method="post" action="#">
              <div className="row gtr-50">
                <div className="col-12 col-12-mobile">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="col-12 col-12-mobile">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div className="col-12 col-12-mobile">
                  <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="password"
                    autocomplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="col-12 col-12-mobile">
                  <input
                    type="text"
                    id="password2"
                    name="password"
                    placeholder="password check"
                    autocomplete="new-password"
                    value={password2}
                    onChange={(event) => setPassword2(event.target.value)}
                  />
                </div>
                <div className="col-12">
                  <ul className="actions" style={{ float: "right" }}>
                    <li>
                      <a href="#" style={{ borderBottom: "none" }}>
                        <input type="submit" value="Login"/>
                      </a>
                    </li>
                    <li>
                      <button onClick={handleSignup} type="submit" value="Submit"/>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
