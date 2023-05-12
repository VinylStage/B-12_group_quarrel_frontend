'use client'

export default function category() {
  return (
    <div className="wrapper">
        <div className="container" id="main">
            <div className="row features" style={{margin: '50px -25px 150px', width: '1335px'}}>
                <section className="col-4 col-12-narrower feature">
                    <div className="sh_row sh_best_userinfo">
                        <div className="sh_p sh_row sh_best_user">
                            <p className="sh_p">post by.</p>
                            <p className="sh_p">
                                <a href="#" className="sh_a">user</a>
                            </p>										
                        </div>
                        <p className="sh_p day">2023. 05. 23</p>
                    </div>
                    <div className="image-wrapper first">
                        <a href="#" className="image featured">
                            <img src='./images/image-wrapper.svg' alt=""/></a>
                    </div>
                    <h3 style={{margin: '15px 0px 5px'}}>Bestpost Title</h3>
                    <div className="sh_row" style={{justifyContent: 'flexEnd'}}>
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
                        <div className="sh_p sh_row sh_best_user">
                            <p className="sh_p">post by.</p>
                            <p className="sh_p">
                                <a href="#" className="sh_a">user</a>
                            </p>										
                        </div>
                        <p className="sh_p day">2023. 05. 23</p>
                    </div>
                    <div className="image-wrapper first">
                        <a href="#" className="image featured">
                            <img src='./images/image-wrapper.svg' alt=""/></a>
                    </div>
                    <h3 style={{margin: '15px 0px 5px'}}>Bestpost Title</h3>
                    <div className="sh_row" style={{justifyContent: 'flexEnd'}}>
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
                        <div className="sh_p sh_row sh_best_user">
                            <p className="sh_p">post by.</p>
                            <p className="sh_p">
                                <a href="#" className="sh_a">user</a>
                            </p>										
                        </div>
                        <p className="sh_p day">2023. 05. 23</p>
                    </div>
                    <div className="image-wrapper first">
                        <a href="#" className="image featured">
                            <img src='./images/image-wrapper.svg' alt=""/></a>
                    </div>
                    <h3 style={{margin: '15px 0px 5px'}}>Bestpost Title</h3>
                    <div className="sh_row" style={{justifyContent: 'flexEnd'}}>
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
            <div className="row gtr-150">
                <div className="col-4 col-12-narrower">
                    <section id="sidebar">
                        <section>
                            <header>
                                <h3>Elit sed feugiat</h3>
                            </header>
                            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel
                            sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore
                            adipiscing elit. Curabitur vel sem sit.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Magna amet nullam</a></li>
                            </ul>
                        </section>
                        <section>
                            <a href="#" className="image featured"><img src="images/pic07.jpg" alt="" /></a>
                            <header>
                                <h3>Commodo lorem varius</h3>
                            </header>
                            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel
                            sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore
                            adipiscing elit. Curabitur vel sem sit.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Ipsum sed dolor</a></li>
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}