"use client";

import React from "react";

export default function user_id() {
    return (
        <div id="footer-wrapper">
            <div id="footer" className="container">
                <header className="major">
                    <h2>내 정보 변경</h2>
                </header>
                <div className="row" style={{justifyContent: 'center', marginTop: '-20px'}}>
                    <section className="col-6 col-12-narrower">
                        <form method="post" action="#">
                            <div className="row gtr-50">
                                <div className="col-12 col-12-mobile">
                                    <input name="name" placeholder="Name" type="text"/>
                                </div>
                                <div className="col-12 col-12-mobile">
                                    <input name="password" placeholder="Password" type="password" />
                                </div>
                                <div className="col-12 col-12-mobile">
                                    <div className="sh_p sh_row sh_best_user" style={{width: '550px'}}>
                                        {/* 체크박스 백그라운드컬러는 보기편하시라고 넣어놨습니다 삭제하셔도 괜찮습니다 */}
                                        <div>남</div>
                                        <input name="gender" className="sh_chek" type="checkbox" style={{backgroundColor: '#f35858;'}}/>
                                        <div>여</div>
                                        <input name="gender" className="sh_chek" type="checkbox" style={{backgroundColor: '#f35858;'}}/>
                                    </div>
                                </div>
                                <div className="col-12 col-12-mobile">
                                    <div className="sh_p sh_row sh_best_user" style={{width: '550px',justifyContent: 'space-around'}}>
                                        {/* 기존 프로필사진 */}
                                        <img className="sh_profileimg2" src="images/pic03.jpg" alt=""/>
                                        <div>⇢</div>
                                        <p className="sh_p">
                                            {/* 이미지 리사이징 자바스크립트밖에 모르겠어서 일단 안했습니다 */}
                                            <input name="profile-image" type="file" id="profile-image" accept="image/*"/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-12-mobile">
                                    <textarea name="subscript" className="ha_url" placeholder="Subscript"></textarea>
                                </div>
                                <div className="col-12">
                                    <ul className="actions" style={{float: 'right'}}>
                                        <button type="submit" className="button sh_p3" style={{fontSize:'16px'}}>변경하기</button>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
              </header>
              <a href="#" className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
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
              <p>
                Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin
                rhoncus, sapien mollis luctus hendrerit, orci dui viverra metus,
                et cursus nulla mi sed elit. Vestibulum condimentum, mauris a
                mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                ante non est. Nullam vitae feugiat libero, eu consequat sem.
                Proin tincidunt neque eros. Duis faucibus blandit ligula, mollis
                commodo risus sodales at. Sed rutrum et turpis vel blandit.
                Nullam ornare congue massa, at commodo nunc venenatis varius.
                Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue
                urna ac consectetur.
              </p>
              <p>
                Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta
                velit at elementum gravida nibh eget, volutpat odio. Proin
                rhoncus, sapien mollis luctus hendrerit, orci dui viverra metus,
                et cursus nulla mi sed elit. Vestibulum condimentum, mauris a
                mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                ante non est. Nullam vitae feugiat libero, eu consequat sem.
                Proin tincidunt neque eros. Duis faucibus blandit ligula, mollis
                commodo risus sodales at. Sed rutrum et turpis vel blandit.
                Nullam ornare congue massa, at commodo nunc venenatis varius.
                Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue
                urna ac consectetur.
              </p>
              <p>
                Vestibulum pellentesque posuere lorem non aliquam. Mauris
                eleifend eleifend felis aliquet ornare. Vestibulum porta velit
                at elementum elementum.
              </p>
              <li className="sh_line"></li>
            </article>
          </div>
          <div className="col-4 col-12-narrower">
            <section id="sidebar">
              <section className="col-4 col-12-narrower feature">
                <div className="image-wrapper first">
                  <a href="#" className="image featured">
                    <img src="./images/image-wrapper.svg" alt="" />
                  </a>
                </div>
                <h3 style={{ margin: "15px 0px 5px" }}>Name</h3>
                <div className="sh_row sh_best_userinfo">
                  <div className="sh_p sh_row sh_best_user">
                    <p className="sh_p">Gender:</p>
                    <p className="sh_p" style={{ fontSize: "16px" }}>
                      성별
                    </p>
                  </div>
                  <p className="sh_p day">2001. 11. 24</p>
                </div>
                <div className="sh_row" style={{ justifyContent: "flex-end" }}>
                  <form method="post" action="#" className="sh_row sh_icon">
                    <button type="submit" className="sh_icon sh_a sh_p3">
                      Follow
                    </button>
                  </form>
                </div>
                <div className="sh_p2 sh_line sh_best_cont profile">
                  이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는
                  사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일
                  안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이
                  필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹
                  미신이라 하실지 모르지만 사실입니다. 영국에서 HGXWCH이라는
                  사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서
                  보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을
                  받았습니다. 어떤 이는 이 편지를 받았으나 96시간 이내 자신의
                  손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧
                  사직되었습니다. 나중에야 이 사실을 알고 7통의 편지를 보냈는데
                  다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를
                  받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다.
                  기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고
                  그렇지 않으면 3년의 불행이 있을 것입니다. 그리고 이 편지를
                  버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를
                  받은 사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고
                  생각하세요. 7년의 행운을 빌면서...
                </div>
                <ul
                  className="actions"
                  style={{ float: "right", marginTop: "10px" }}
                >
                  <li>
                    <a href="#" className="button">
                      내 정보 수정
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </div>
    );
}

