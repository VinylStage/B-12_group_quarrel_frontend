'use client'

export default function followers() {
  return (
    <div className="wrapper">
        <div className="container" id="main">
            <div className="row gtr-150">
                <div className="col-8 col-12-narrower">
                    {/* user_id를 팔로우하는 사람들의 목록 */}
                    <article id="content">
                    <div className="sh_p sh_row sh_best_user">
                        <a href="#" className="sh_profileimg">
                            <img className="sh_profileimg" src="images/pic03.jpg" alt=""/>
                        </a>
                        <p className="sh_p">
                            <a href="#" className="sh_a">follower's name</a>
                        </p>
                    </div>
                    <div className="sh_line"></div>
                    </article>
                    <article id="content">
                    <div className="sh_p sh_row sh_best_user">
                        <a href="#" className="sh_profileimg">
                            <img className="sh_profileimg" src="images/pic03.jpg" alt=""/>
                        </a>
                        <p className="sh_p">
                            <a href="#" className="sh_a">follower's name</a>
                        </p>
                    </div>
                    <div className="sh_line"></div>
                    </article>
                </div>
                <div className="col-4 col-12-narrower">
                    <section id="sidebar">
                        <section className="col-4 col-12-narrower feature">
                            <div className="image-wrapper first">
                                {/* 프로필사진 */}
                                <img className="image featured" src='./images/image-wrapper.svg' alt=""/>
                            </div>
                            <h3 style={{margin: '15px 0px 5px'}}>Name</h3>
                            <div className="sh_row sh_best_userinfo">
                                <div className="sh_p sh_row sh_best_user" style={{width:'150px'}}>
                                <p className="sh_p">Gender:</p>
                                    <p className="sh_p" style={{fontSize: '16px;'}}>성별</p>
                                </div>
                                <p className="sh_p day">2001. 11. 24</p>
                            </div>
                            <div className="sh_row" style={{justifyContent: 'flex-end'}}>
                                {/* Follow버튼 / 본인에게는 보이지 않게 처리 */}
                                <form method="post" action="#" className="sh_row sh_icon">
                                    <button type="submit" className="sh_icon sh_a sh_p3">Follow</button>
                                </form>
                                {/* my view / follow 피드페이지, follower 리스트페이지로 가는 하이퍼링크 달아주세요 / 옆에 인원수 세고 인원수에 a태그로 달면 더 좋을 것 같아요 그건 추가사항으로! */}
                                    <ul className="sh_row sh_icon">
                                        <a href="#" className="sh_icon sh_a">Follow's</a>
                                    </ul>
                                    <ul className="sh_row sh_icon">
                                        <a href="#" className="sh_icon sh_a">Follower's</a>
                                    </ul>
                            </div>
                            <div className="sh_p2 sh_line sh_best_cont profile">
                                이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 
                                이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.
                                영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다. 며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 
                                어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다. 
                                나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다. 미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 
                                결국 9일 후 그는 암살당했습니다. 기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다. 
                                그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다. 이 편지를 받은 사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요. 7년의 행운을 빌면서...
                            </div>
                            {/* 본인에게만 보이게 */}
                            <ul className="actions" style={{float: 'right', marginTop: '10px'}}>
                                <li><a href="#" className="button">내 정보 수정</a></li>
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

