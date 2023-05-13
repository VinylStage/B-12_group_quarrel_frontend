"use client";

import { useState } from "react";

export default function category() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("access");

  const fetchData = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/articles/<int:category_id/",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      },
      setData(response.data)
    );
  };
  console.log({ setData });
  return (
    <div className="wrapper">
      <div className="container" id="main">
        <h1 className="sh_besttitle">Best Post</h1>
        <div
          className="row features sh_bestbox"
          style={{ margin: "50px 0px", paddingBottom: "50px" }}
        >
          <section className="col-4 col-12-narrower feature">
            <div className="sh_row sh_best_userinfo">
              <div className="sh_p sh_row sh_best_user">
                <p className="sh_p">post by.</p>
                <p className="sh_p">
                  <a href="#" className="sh_a">
                    user
                  </a>
                </p>
              </div>
              <p className="sh_p day">2023. 05. 23</p>
            </div>
            <div className="image-wrapper first">
              <a href="#" className="image featured">
                <img src="./images/image-wrapper.svg" alt="" />
              </a>
            </div>
            <h3 style={{ margin: "15px 0px 5px" }}>Bestpost Title</h3>
            <div className="sh_row" style={{ justifyContent: "flex-end" }}>
              <form method="post" action="#" className="sh_row sh_icon">
                <button type="submit" className="sh_icon sh_a">
                  Bookmark
                </button>
                <p className="sh_p3">44</p>
              </form>
              <form method="post" action="#" className="sh_row sh_icon">
                <button type="submit" className="sh_icon sh_a">
                  Like
                </button>
                <p className="sh_p3">44</p>
              </form>
            </div>
            <div className="sh_p2 sh_line sh_best_cont">Content</div>
            <ul
              className="actions"
              style={{ float: "right", marginTop: "10px" }}
            >
              <li>
                <a href="#" className="button">
                  Read
                </a>
              </li>
            </ul>
          </section>
          <section className="col-4 col-12-narrower feature">
            <div className="sh_row sh_best_userinfo">
              <div className="sh_p sh_row sh_best_user">
                <p className="sh_p">post by.</p>
                <p className="sh_p">
                  <a href="#" className="sh_a">
                    user
                  </a>
                </p>
              </div>
              <p className="sh_p day">2023. 05. 23</p>
            </div>
            <div className="image-wrapper first">
              <a href="#" className="image featured">
                <img src="./images/image-wrapper.svg" alt="" />
              </a>
            </div>
            <h3 style={{ margin: "15px 0px 5px" }}>Bestpost Title</h3>
            <div className="sh_row" style={{ justifyContent: "flex-end" }}>
              <form method="post" action="#" className="sh_row sh_icon">
                <button type="submit" className="sh_icon sh_a">
                  Bookmark
                </button>
                <p className="sh_p3">44</p>
              </form>
              <form method="post" action="#" className="sh_row sh_icon">
                <button type="submit" className="sh_icon sh_a">
                  Like
                </button>
                <p className="sh_p3">44</p>
              </form>
            </div>
            <div className="sh_p2 sh_line sh_best_cont">Content</div>
            <ul
              className="actions"
              style={{ float: "right", marginTop: "10px" }}
            >
              <li>
                <a href="#" className="button">
                  Read
                </a>
              </li>
            </ul>
          </section>
          <section className="col-4 col-12-narrower feature">
            <div className="sh_row sh_best_userinfo">
              <div className="sh_p sh_row sh_best_user">
                <p className="sh_p">post by.</p>
                <p className="sh_p">
                  <a href="#" className="sh_a">
                    user
                  </a>
                </p>
              </div>
              <p className="sh_p day">2023. 05. 23</p>
            </div>
            <div className="image-wrapper first">
              <a href="#" className="image featured">
                <img src="./images/image-wrapper.svg" alt="" />
              </a>
            </div>
            <h3 style={{ margin: "15px 0px 5px" }}>Bestpost Title</h3>
            <div className="sh_row" style={{ justifyContent: "flex-end" }}>
              <form method="post" action="#" className="sh_row sh_icon">
                <button type="submit" className="sh_icon sh_a">
                  Bookmark
                </button>
                <p className="sh_p3">44</p>
              </form>
              <form method="post" action="#" className="sh_row sh_icon">
                <button type="submit" className="sh_icon sh_a">
                  Like
                </button>
                <p className="sh_p3">44</p>
              </form>
            </div>
            <div className="sh_p2 sh_line sh_best_cont">Content</div>
            <ul
              className="actions"
              style={{ float: "right", marginTop: "10px" }}
            >
              <li>
                <a href="#" className="button">
                  Read
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="sh_article_list" style={{ marginTop: "100px" }}>
          <section id="sidebar" className="row sh_article_list_col">
            <section className="sh_article">
              <header>
                <h3>사진이 없는 게시글</h3>
              </header>
              <p>content</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Read
                  </a>
                </li>
              </ul>
            </section>
            <section className="sh_article">
              <a href="#" className="image featured">
                <img src="images/pic07.jpg" alt="" />
              </a>
              <header>
                <h3>사진이 있는 게시글</h3>
              </header>
              <p>
                이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는
                사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일
                안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이
                필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹
                미신이라 하실지 모르지만 사실입니다. 영국에서 HGXWCH이라는
                사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서
                보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다.
                어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야
                한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 나중에야 이
                사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다.
                미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국
                9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면
                7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을
                것입니다. 그리고 이 편지를 버리거나 낙서를 해서는 절대로
                안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들것입니다.
                힘들겠지만 좋은게 좋다고 생각하세요. 7년의 행운을 빌면서...
              </p>
              <ul
                className="actions"
                style={{ float: "right", marginTop: "10px" }}
              >
                <li>
                  <a href="#" className="button">
                    Read
                  </a>
                </li>
              </ul>
            </section>
            <section className="sh_article">
              <header>
                <h3>사진이 없는 게시글</h3>
              </header>
              <p>content</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Read
                  </a>
                </li>
              </ul>
            </section>
            <section className="sh_article">
              <a href="#" className="image featured">
                <img src="images/pic07.jpg" alt="" />
              </a>
              <header>
                <h3>사진이 있는 게시글</h3>
              </header>
              <p>Content</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Read
                  </a>
                </li>
              </ul>
            </section>
            <section className="sh_article">
              <header>
                <h3>사진이 없는 게시글</h3>
              </header>
              <p>content</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Read
                  </a>
                </li>
              </ul>
            </section>
            <section className="sh_article">
              <a href="#" className="image featured">
                <img src="images/pic07.jpg" alt="" />
              </a>
              <header>
                <h3>사진이 있는 게시글</h3>
              </header>
              <p>Content</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Read
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
