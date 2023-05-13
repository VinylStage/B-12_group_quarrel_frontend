"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const router = useRouter();

  async function handleSignup() {
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
    router.push("/users/login");
    router.refresh();
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
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="col-12 col-12-mobile">
                  <input
                    type="password"
                    id="password2"
                    name="password"
                    placeholder="password check"
                    autoComplete="new-password"
                    value={password2}
                    onChange={(event) => setPassword2(event.target.value)}
                  />
                </div>
                <div className="col-12">
                  <ul className="actions" style={{ float: "right" }}>
                    <li>
                      <a href="login/" style={{ borderBottom: "none" }}>
                        Login
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleSignup}
                        type="submit"
                        value="Submit"
                      />
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
