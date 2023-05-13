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
        <div className="container" id="main" style={{width:''}}>
            <h1 className="sh_besttitle">Best Post</h1>
            <div className="row features sh_bestbox" style={{margin: '50px 0px;', paddingBottom: '50px;'}}>
                <section className="col-4 col-12-narrower feature">
                    <div className="sh_row sh_best_userinfo">
                        <div className="sh_p sh_row sh_best_user" style={{width:'180px'}}>
                            <p className="sh_p">post by.</p>
                            <p className="sh_p">
                                <a href="#" className="sh_a">user</a>
                            </p>	
                        </div>
                        <p className="sh_p day">2023. 08. 29</p>
                    </div>
                    <div className="image-wrapper first">
                        <a href="#" className="image featured">
                            <img src='./images/image-wrapper.svg' alt=""/></a>
                    </div>
                    <h3 style={{margin: '15px 0px 5px'}}>Bestpost Title</h3>
                    <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Bookmark</button><p className="sh_p3">44</p>
                        </form>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Like</button><p className="sh_p3">44</p>
                        </form>
                    </div>
                    <div className="sh_p2 sh_line sh_best_cont">Content</div>
                    <ul className="actions" style={{float: 'right', marginTop: '10px'}}>
                        <li><a href="#" className="button">Read</a></li>
                    </ul>
                </section>
                <section className="col-4 col-12-narrower feature">
                    <div className="sh_row sh_best_userinfo">
                        <div className="sh_p sh_row sh_best_user" style={{width:'180px'}}>
                            <p className="sh_p">post by.</p>
                            <p className="sh_p">
                                <a href="#" className="sh_a">user</a>
                            </p>										
                        </div>
                        <p className="sh_p day">2023. 08. 29</p>
                    </div>
                    <div className="image-wrapper first">
                        <a href="#" className="image featured">
                            <img src='./images/image-wrapper.svg' alt=""/></a>
                    </div>
                    <h3 style={{margin: '15px 0px 5px'}}>Bestpost Title</h3>
                    <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Bookmark</button><p className="sh_p3">44</p>
                        </form>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Like</button><p className="sh_p3">44</p>
                        </form>
                    </div>
                    <div className="sh_p2 sh_line sh_best_cont">Content</div>
                    <ul className="actions" style={{float: 'right', marginTop: '10px'}}>
                        <li><a href="#" className="button">Read</a></li>
                    </ul>
                </section>
                <section className="col-4 col-12-narrower feature">
                    <div className="sh_row sh_best_userinfo">
                        <div className="sh_p sh_row sh_best_user" style={{width:'180px'}}>
                            <p className="sh_p">post by.</p>
                            <p className="sh_p">
                                <a href="#" className="sh_a">user</a>
                            </p>										
                        </div>
                        <p className="sh_p day">2023. 08. 29</p>
                    </div>
                    <div className="image-wrapper first">
                        <a href="#" className="image featured">
                            <img src='./images/image-wrapper.svg' alt=""/></a>
                    </div>
                    <h3 style={{margin: '15px 0px 5px'}}>Bestpost Title</h3>
                    <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Bookmark</button><p className="sh_p3">44</p>
                        </form>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Like</button><p className="sh_p3">44</p>
                        </form>
                    </div>
                    <div className="sh_p2 sh_line sh_best_cont">Content</div>
                    <ul className="actions" style={{float: 'right', marginTop: '10px'}}>
                        <li><a href="#" className="button">Read</a></li>
                    </ul>
                </section>
            </div>
                <div className="sh_article_list" style={{marginTop:'100px'}}>
                    <section id="sidebar" className="row sh_article_list_col">
                        {/* 사진없는게시글 */}
                        <section className="sh_article">
                            <div className="sh_row sh_best_userinfo">
                                <div className="sh_p sh_row sh_best_user" style={{width:'180px'}}>
                                    <p className="sh_p">post by.</p>
                                    <p className="sh_p">
                                        <a href="#" className="sh_a">user</a>
                                    </p>										
                                </div>
                                <p className="sh_p day">2023. 08. 29</p>
                            </div>
                            <header>
                                <h3>사진이 없는 게시글</h3>
                            </header>
                            <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                                <form method="post" action="#" className="sh_row sh_icon">
                                    <button type="submit" className="sh_icon sh_a">Bookmark</button><p className="sh_p3">44</p>
                                </form>
                                <form method="post" action="#" className="sh_row sh_icon">
                                    <button type="submit" className="sh_icon sh_a">Like</button><p className="sh_p3">44</p>
                                </form>
                            </div>
                            <p>content</p>
                            <a href="#" className="button" style={{float: 'right'}}>Read</a>
                        </section>
                        {/* 사진있는게시글 */}
                        <section className="sh_article">
                            <div className="sh_row sh_best_userinfo">
                                <div className="sh_p sh_row sh_best_user" style={{width:'180px'}}>
                                    <p className="sh_p">post by.</p>
                                    <p className="sh_p">
                                        <a href="#" className="sh_a">user</a>
                                    </p>										
                                </div>
                                <p className="sh_p day">2023. 08. 29</p>
                            </div>
                            <a href="#" className="image featured"><img src="images/pic07.jpg" alt="" /></a>
                            <header>
                                <h3>사진이 있는 게시글</h3>
                            </header>
                            <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                                <form method="post" action="#" className="sh_row sh_icon">
                                    <button type="submit" className="sh_icon sh_a">Bookmark</button><p className="sh_p3">44</p>
                                </form>
                                <form method="post" action="#" className="sh_row sh_icon">
                                    <button type="submit" className="sh_icon sh_a">Like</button><p className="sh_p3">44</p>
                                </form>
                            </div>
                            <p>content</p>
                            <a href="#" className="button" style={{float: 'right', marginTop: '10px'}}>Read</a>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    
  )
}
