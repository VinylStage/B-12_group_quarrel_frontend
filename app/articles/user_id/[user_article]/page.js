"use client";

import React from "react";
import EditMyPage from "@/components/EditMyPage";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteView from "@/components/DeleteVIew";
import LikeView from "@/components/LikeView";
import Follow from "@/components/Follow"

export default function user_article({params}) {
  const [data, setData] = useState([]);
  console.log({params})
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("access");
      console.log(token)
      const response = await axios.get(`http://localhost:8000/articles/${params.user_article}/user_article`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data.results);

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="wrapper">
      {data.map((a, i) => {
        const title = a.title;
        const content = a.content;
        const likes = a.article_likes_count;
        const create = a.create_at.substr(0, 10);
        const user = a.user;
        const image = a.article_image;
        const bookmark = a.bookmark_count;
        return (
          <div className="container" id="main">
            <div className="row gtr-150">
              <div className="col-8 col-12-narrower">
                {/* user_id의 게시글들 */}
                <article id="content">
                  <header>
                    {/* 수정,삭제버튼 / 본인에게만 보이게 */}
                    <EditMyPage />
                    <div
                      className="sh_row"
                      style={{ justifyContent: "flex-end" }}
                    >
                      <form className="sh_row button">
                        <DeleteView />
                      </form>
                    </div>
                    <h3 style={{ margin: "15px 0px 5px" }}>{title}</h3>
                    <div className="sh_row sh_best_userinfo">
                      <div className="sh_p sh_row sh_best_user">
                        <p className="sh_p">post by.</p>
                        <p className="sh_p">
                          <a href="#" className="sh_a">
                            {user}
                          </a>
                        </p>
                      </div>
                      <p className="sh_p day">2023. 05. 23</p>
                    </div>
                  </header>
                  <a href="#" className="image featured">
                    <img src={image} alt="" />
                  </a>
                  <div
                    className="sh_row"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <form method="post" action="#" className="sh_row sh_icon">
                      <button type="submit" className="sh_icon sh_a">
                        Bookmark
                      </button>
                      <p className="sh_p3">{bookmark}</p>
                    </form>
                    <form method="post" action="#" className="sh_row sh_icon">
                      <LikeView />
                      <p className="sh_p3">44</p>
                    </form>
                  </div>
                  <p>{content}</p>
                  <div
                    className="sh_row"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <a href="#" className="button">
                      Read
                    </a>
                  </div>
                  <div className="sh_line"></div>
                </article>
              </div>
              <div className="col-4 col-12-narrower">
                <section id="sidebar">
                  <section className="col-4 col-12-narrower feature">
                    <div className="image-wrapper first">
                      {/* 프로필사진 */}
                      <img
                        className="image featured"
                        src="./images/image-wrapper.svg"
                        alt=""
                      />
                    </div>
                    <h3 style={{ margin: "15px 0px 5px" }}>{user}</h3>
                    <div className="sh_row sh_best_userinfo">
                      <div
                        className="sh_p sh_row sh_best_user"
                        style={{ width: "150px" }}
                      >
                        <p className="sh_p">gender:</p>
                        <p className="sh_p" style={{ fontSize: "16px" }}>
                          성별
                        </p>
                      </div>
                      <p className="sh_p day">{create}</p>
                    </div>
                    <div
                      className="sh_row"
                      style={{ justifyContent: "flex-end" }}
                    >
                      {/* Follow버튼 / 본인에게는 보이지 않게 처리 */}
                       <Follow followId={params.user_article}/>
                      {/* my view / follow 피드페이지, follower 리스트페이지로 가는 하이퍼링크 달아주세요 / 옆에 인원수 세고 인원수에 a태그로 달면 더 좋을 것 같아요 그건 추가사항으로! */}
                      <ul className="sh_row sh_icon">
                        <a href={`http://localhost:3000/users/follow/${params.user_article}`} className="sh_icon sh_a">
                          Follow's
                        </a>
                      </ul>
                      <ul className="sh_row sh_icon">
                        <a href={`http://localhost:3000/users/followers/${params.user_article}`} className="sh_icon sh_a">
                          Follower's
                        </a>
                      </ul>
                    </div>
                    <div className="sh_p2 sh_line sh_best_cont profile">
                      {content}
                    </div>
                    {/* 본인에게만 보이게 */}
                    <ul
                      className="actions"
                      style={{ float: "right", marginTop: "10px" }}
                    >
                      <li>
                        <EditMyPage />
                      </li>
                    </ul>
                  </section>
                </section>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
