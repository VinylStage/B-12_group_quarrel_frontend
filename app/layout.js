"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const refresh = localStorage.getItem("refresh");
  const router = useRouter();
  // 로그아웃 함수
  async function handleLogout() {
    const response = await fetch(
      "http://127.0.0.1:8000/users/api/token/blacklist/",
      {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ refresh: refresh }),
      }
    );
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("payload");
    router.refresh();
  }
  function AuthView() {
    const access = localStorage.getItem("access");
    // 로그인여부에 따라 버튼표시
    if (access) {
      return (
        <div>
          <a href="#">MyPage</a>
          <button onClick={handleLogout} type="submit" value="Submit">
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <a href="/users/login">Login</a> | <a href="/users/signup">signup</a>
        </div>
      );
    }
  }
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </head>

      <body className="homepage is-preload">
        <div id="page-wrapper">
          {/* <!-- Header --> */}
          <div id="header-wrapper">
            <div id="header" className="container">
              {/* <!-- Nav --> */}
              <nav id="nav">
                <ul>
                  {/* <!-- 카테고리 추가해주시면 됩니다 --> */}
                  <li>
                    <a href="#">Category</a>
                  </li>
                  <li className="break">
                    <a href="#">Category</a>
                  </li>
                  {/* <!-- Logo --> */}
                  <li className="sh_logo">
                    <h1 id="logo">
                      <a href="/">SIVIE</a>
                    </h1>
                  </li>
                  <li>
                    <a href="#">Category</a>
                  </li>
                  {/* <li>
                    <a href="#">Category</a>
                  </li> */}
                  {/* <!-- 비회원은 Login으로, Login 화면에서 signup 버튼 만들기 --> */}
                  <li className="sh_mypage">
                    <AuthView></AuthView>
                    <ul>
                      <li>
                        <a href="#">NO.1</a>
                      </li>
                      <li>
                        <a href="#">NO.2</a>
                      </li>
                      <li>
                        <a href="#">NO.3</a>
                      </li>
                      <li>
                        <a href="#">더보기</a>
                        <ul>
                          <li>
                            <a href="#">바니</a>
                          </li>
                          <li>
                            <a href="#">당근</a>
                          </li>
                          <li>
                            <a href="#">바니</a>
                          </li>
                          <li>
                            <a href="#">당근</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {children}
          {/* <!-- Footer --> */}
          <div id="footer-wrapper">
            <ul
              className="menu"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <li>&copy; Untitled. All rights reserved.</li>
              <li>
                TEAM: <a href="#">SIVIE</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Scripts --> */}

        <script src="%PUBLIC_URL%/js/jquery.min.js"></script>
        <script src="%PUBLIC_URL%/js/jquery.dropotron.min.js"></script>
        <script src="%PUBLIC_URL%/js/browser.min.js"></script>
        <script src="%PUBLIC_URL%/js/breakpoints.min.js"></script>
        <script src="%PUBLIC_URL%/js/util.js"></script>
        <script src="%PUBLIC_URL%/js/main.js"></script>
      </body>
    </html>
  );
}
