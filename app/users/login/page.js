"use client";


import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    console.log(email, password);
    const response = await fetch("http://127.0.0.1:8000/users/api/token/", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    
    const responseJson = await response.json();
    
    localStorage.setItem("access", responseJson.access);
    localStorage.setItem("refresh", responseJson.refresh);
    
    
    const base64Url = responseJson.access.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
      );
      
      localStorage.setItem("payload", jsonPayload);
      
    }

  return (
    <div id="footer-wrapper">
      <div id="footer" className="container">
        <header className="major">
          <h2>Login</h2>
        </header>

        <div className="row" style={{ justifyContent: "center", marginTop: "-20px" }}>
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
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="col-12">
                  <ul className="actions" style={{ float: "right" }}>
                    <li>
                      <a href="signup/" style={{ borderBottom: "none" }}>
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogin}
                        type="submit"
                        value="Login"
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
