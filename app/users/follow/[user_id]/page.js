"use client";
import React from 'react';
import FollowView from '../page';
// import { useRouter } from 'next/router';

// export async function generateStaticParams() {
//     const follows = await fetch('http://127.0.0.1:8000/users/follow/1').then((res) => res.json());
//     console.log(follows)
//     return follows.map((follow) => ({
//       follow_id: follow.id,
//     }));
//   }

export default function Followpage({ params }) {
    // const router = useRouter();
    // console.log(router)
    // const { user_id } = router.query.user_id;
    console.log({params})

    return (
      <div className="wrapper">
          <div className="container" id="main">
              <div className="row gtr-150">
                  <div className="col-8 col-12-narrower">
                              <h2 style={{marginBottom: '50px'}}>Follower's posting</h2>
                      {/* 게시글 */}
                      <article id="content">
                          <header>
                              <li className="sh_line"></li>
                              <h3 style={{margin: '15px 0px 5px'}}>Follower's Title</h3>
                              <div className="sh_row sh_best_userinfo">
                                  <div className="sh_p sh_row sh_best_user">
                                      <p className="sh_p">post by.</p>
                                      <p className="sh_p">
                                          <a href="#" className="sh_a">user</a>
                                      </p>
                                  </div>
                                  <p className="sh_p day">2023. 05. 23</p>
                              </div>
                          </header>
                          <a href="#" className="image featured"><img src="images/media/img_prof/profile.jpg" alt="" /></a>
                          <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                          <form method="post" action="#" className="sh_row sh_icon">
                              <button type="submit" className="sh_icon sh_a">Bookmark</button><p className="sh_p3">44</p>
                          </form>
                          <form method="post" action="#" className="sh_row sh_icon">
                              <button type="submit" className="sh_icon sh_a">Like</button><p className="sh_p3">44</p>
                          </form>
                          </div>
                          <p>hi</p>
                      </article>
                  </div>
                  <div className="col-4 col-12-narrower">
                      {/* Sidebar */}
                      <section id="sidebar">
                          <section className="col-4 col-12-narrower feature">
                              <div className="image-wrapper first">
                                  {/* 유저정보 */}
                                  
                                  <FollowView user_id={params.user_id}/>
                              </div>
                          </section>
                      </section>
                  </div>
              </div>
          </div>
      </div>
    )
  };

