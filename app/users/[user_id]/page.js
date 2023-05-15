"use client";

import React from "react";

export default function user_id({ params }) {
  console.log({ params });
  return (
    <div id="footer-wrapper">
      <div id="footer" className="container">
        <header className="major">
          <h2>내 정보 변경</h2>
        </header>
        <div
          className="row"
          style={{ justifyContent: "center", marginTop: "-20px" }}
        >
          <section className="col-6 col-12-narrower">
            <form method="post" action="#">
              <div className="row gtr-50">
                <div className="col-12 col-12-mobile">
                  <input name="name" placeholder="Name" type="text" />
                </div>
                <div className="col-12 col-12-mobile">
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div className="col-12 col-12-mobile">
                  <div
                    className="sh_p sh_row sh_best_user"
                    style={{ width: "550px" }}
                  >
                    {/* 체크박스 백그라운드컬러는 보기편하시라고 넣어놨습니다 삭제하셔도 괜찮습니다 */}
                    <div>남</div>
                    <input
                      name="gender"
                      className="sh_chek"
                      type="checkbox"
                      style={{ backgroundColor: "#f35858;" }}
                    />
                    <div>여</div>
                    <input
                      name="gender"
                      className="sh_chek"
                      type="checkbox"
                      style={{ backgroundColor: "#f35858;" }}
                    />
                  </div>
                </div>
                <div className="col-12 col-12-mobile">
                  <div
                    className="sh_p sh_row sh_best_user"
                    style={{ width: "550px", justifyContent: "space-around" }}
                  >
                    {/* 기존 프로필사진 */}
                    <img
                      className="sh_profileimg2"
                      src="images/pic03.jpg"
                      alt=""
                    />
                    <div>⇢</div>
                    <p className="sh_p">
                      {/* 이미지 리사이징 자바스크립트밖에 모르겠어서 일단 안했습니다 */}
                      <input
                        name="profile-image"
                        type="file"
                        id="profile-image"
                        accept="image/*"
                      />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-12-mobile">
                  <textarea
                    name="subscript"
                    className="ha_url"
                    placeholder="Subscript"
                  ></textarea>
                </div>
                <div className="col-12">
                  <ul className="actions" style={{ float: "right" }}>
                    <button
                      type="submit"
                      className="button sh_p3"
                      style={{ fontSize: "16px" }}
                    >
                      변경하기
                    </button>
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
