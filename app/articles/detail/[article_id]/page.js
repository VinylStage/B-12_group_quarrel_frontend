"use client";

import { useState, useEffect } from "react";
import axios from "axios";
export default function detail({ params }) {
  const [data, setData] = useState([]);
  const article_id = parseInt(params.article_id);
  console.log(article_id)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/articles/detail/${article_id}/`
      );
      const data = response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>        
    <div className="wrapper">
      <div className="sh_container container" id="main">
        <article id="content">
          <header>
            {/* 본인만 보이게 */}
            <div className="sh_row" style={{ justifyContent: "flex-end" }}>
              <form
                method="post"
                action="#"
                className="sh_row button"
                style={{ marginRight: "10px" }}
              >
                <button type="submit" className="sh_icon sh_a">
                  수정하기
                </button>
              </form>
              <form method="post" action="#" className="sh_row button">
                <button type="submit" className="sh_icon sh_a">
                  삭제하기
                </button>
              </form>
            </div>
            <h2>{data.title}</h2>
            <div className="sh_row sh_best_userinfo">
              <div className="sh_p sh_row sh_best_user">
                <p className="sh_p sh_pix">post by.</p>
                <p className="sh_p">
                  <a href={`http://localhost:3000/articles/user_id/${data.user}`} className="sh_a">
                    {data.user}
                  </a>
                </p>
              </div>
              <p className="sh_p day">{data.create_at}</p>
            </div>
          </header>
          <a href="#" className="image featured">
            <img src="images/pic06.jpg" alt="" />
          </a>
          <div className="sh_row" style={{ justifyContent: "flex-end" }}>
            <form method="post" action="#" className="sh_row sh_icon">
              <button type="submit" className="sh_icon sh_a">
                Bookmark
              </button>
              <p className="sh_p3">{data.bookmark_cout}</p>
            </form>
            <form method="post" action="#" className="sh_row sh_icon">
              <button type="submit" className="sh_icon sh_a">
                Like
              </button>
              <p className="sh_p3">{data.articfle_like_cout}</p>
            </form>
          </div>

          <p>content</p>
          <p>{data.content}</p>
        </article>
        <form>
          <div>
            <textarea
              name="comm_content"
              placeholder="Comment"
              className="ha_input"
              required
            ></textarea>
          </div>
          <button type="submit" style={{ margin: "20px 0px" }}>
            댓글 작성
          </button>
        </form>
        {/* 댓글 append */}
        <div className="sh_line" style={{ marginBottom: "20px" }}></div>
        <p>comm_create_at</p>
        <div className="sh_icon sh_a sh_row" style={{ float: "right" }}>
          <button type="submit" className="sh_icon sh_a">
            Like
          </button>
          <p className="sh_p3">44</p>
        </div>
        <div className="sh_p sh_row sh_best_user" style={{ width: "900px" }}>
          <a href="#" className="sh_profileimg">
            <img className="sh_profileimg" src="images/pic03.jpg" alt="" />
          </a>
          <p className="sh_p">
            <a href='#' className="sh_a">
              username
            </a>
          </p>
          <div
            style={{
              fontSize: "23px",
              textAlign: "center",
              marginLeft: "40px",
            }}
          >
            comm_content
          </div>
        </div>
        {/* 본인만 보이게 */}
        <div className="sh_row" style={{ justifyContent: "flex-end" }}>
          <form
            method="post"
            action="#"
            className="sh_row button"
            style={{ marginRight: "10px" }}
          >
            <button type="submit" className="sh_icon sh_a">
              수정하기
            </button>
          </form>
          <form method="post" action="#" className="sh_row button">
            <button type="submit" className="sh_icon sh_a">
              삭제하기
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
