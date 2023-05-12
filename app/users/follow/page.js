'use client'

export default function follow() {
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
                        <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                        <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Bookmark</button><p className="sh_p3">44</p>
                        </form>
                        <form method="post" action="#" className="sh_row sh_icon">
                            <button type="submit" className="sh_icon sh_a">Like</button><p className="sh_p3">44</p>
                        </form>
                        </div>
                        <p>Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin rhoncus, sapien
                        mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
                        condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                        ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
                        eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
                        turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
                        Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
                        <p>Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at elementum
                        gravida nibh eget, volutpat odio. Proin rhoncus, sapien
                        mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
                        condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                        ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
                        eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
                        turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
                        Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
                        <p>Vestibulum pellentesque posuere lorem non aliquam. Mauris eleifend eleifend
                        felis aliquet ornare. Vestibulum porta velit at elementum elementum.</p>
                    </article>
                </div>
                <div className="col-4 col-12-narrower">
                    {/* Sidebar */}
                    <section id="sidebar">
                        <section className="col-4 col-12-narrower feature">
                            <div className="image-wrapper first">
                                {/* 유저정보 */}
                                <div className="sh_p sh_row sh_best_user">
                                    <a href="#" className="sh_profileimg">
                                        <img className="sh_profileimg" src="images/pic03.jpg" alt=""/>
                                    </a>
                                    <p className="sh_p">
                                        <a href="#" className="sh_a">user</a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}