"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  async function handleSignup() {
    const response = await fetch("http://127.0.0.1:8000/users/signup/", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    });
  }

  async function EmailCert() {
    const response = await fetch("http://127.0.0.1:8000/users/pass/cert/", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        code: code,
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
                    type="text"
                    id="code"
                    name="code"
                    placeholder="code"
                    autoComplete="code"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                  />
                </div>
                <div className="col-12">
                  <ul className="actions" style={{ float: "right" }}>
                    <li>
                      <button
                        onClick={EmailCert}
                        type="submit"
                        value="Submit"
                        name="인증완료"
                        style={{ border: "none" }}
                      >
                        인증하기
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleSignup}
                        type="submit"
                        value="Submit"
                        name="인증"
                        style={{ border: "none" }}
                      >
                        이메일 인증받기
                      </button>
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
