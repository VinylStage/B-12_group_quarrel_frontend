'use client'

import './globals.css'

export default function SignUp() {
  return (
    <div id="footer-wrapper">
    <div id="footer" className="container">
        <header className="major">
            <h2>Sign up</h2>
        </header>
        <div className="row" style={{justifyContent: 'center', marginTop: '-20px'}}>
            <section className="col-6 col-12-narrower">
                <form method="post" action="#">
                    <div className="row gtr-50">
                        <div className="col-12 col-12-mobile">
                            <input name="email" placeholder="Email" type="text" />
                        </div>
                        <div className="col-12 col-12-mobile">
                            <input name="name" placeholder="Name" type="text" />
                        </div>
                        <div className="col-12 col-12-mobile">
                            <input name="password" placeholder="password" type="text" />
                        </div>
                        <div className="col-12 col-12-mobile">
                            <input name="password2" placeholder="password again" type="text" />
                        </div>
                        <div className="col-12">
                            <ul className="actions" style={{float: 'right'}}>
                                <li><a href="#" style={{borderBottom: 'none'}}>
                                    <input type="submit" value="Login"/></a>
                                </li>
                                <li><input type="submit" value="Submit"/></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
</div>
  )
}
