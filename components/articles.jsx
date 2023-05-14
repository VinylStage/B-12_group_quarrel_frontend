"use client";

// 게시글 목록가져오는 컴포넌트
import { useState, useEffect } from "react";
import axios from "axios";

function Articles({ category_id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");
      const response = await axios.get(
        `http://localhost:8000/articles/${category_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data &&
        data.map((a, i) => {
          const title = a.title;
          const content = a.content;
          const likes = a.article_likes_count;
          const create = a.create_at.substr(0, 10);
          const user = a.user;
          const image = a.article_image;
          const bookmark = a.bookmark_count;
          return (
            <section className="col-4 col-12-narrower feature" key={i}>
              <div className="sh_row sh_best_userinfo">
                <div
                  className="sh_p sh_row sh_best_user"
                  style={{ width: "180px" }}
                >
                  <p className="sh_p">post by.</p>
                  <p className="sh_p">
                    <a href="#" className="sh_a">
                      {user}
                    </a>
                  </p>
                </div>
                <p className="sh_p day">{create}</p>
              </div>
              <div className="image-wrapper first">
                <a href="#" className="image featured">
                  <img src={image} alt="" />
                </a>
              </div>
              <h3 style={{ margin: "15px 0px 5px" }}>{title}</h3>
              <div className="sh_row" style={{ justifyContent: "flexEnd" }}>
                <form method="post" action="#" className="sh_row sh_icon">
                  <button type="submit" className="sh_icon sh_a">
                    {bookmark}
                  </button>
                  <p className="sh_p3">44</p>
                </form>
                <form method="post" action="#" className="sh_row sh_icon">
                  <button type="submit" className="sh_icon sh_a">
                    {likes}
                  </button>
                  <p className="sh_p3">44</p>
                </form>
              </div>
              <div className="sh_p2 sh_line sh_best_cont">{content}</div>
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
          );
        })}
    </div>
  );
}

export default Articles;
