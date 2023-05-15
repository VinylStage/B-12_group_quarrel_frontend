"use client";

export default function detail() {
  return (
    <div class="wrapper">
      <div class="sh_container container" id="main">
        <article id="content">
          <header>
            {/* 본인만 보이게 */}
            <div className="sh_row" style={{ justifyContent: "flex-end" }}>
              <form
                method="post"
                action="#"
                className="sh_row button"
                style={{ marginRight: "10px" }}
              >
                <button type="submit" className="sh_icon sh_a">
                  수정하기
                </button>
              </form>
              <form method="post" action="#" className="sh_row button">
                <button type="submit" className="sh_icon sh_a">
                  삭제하기
                </button>
              </form>
            </div>
            <h2>title</h2>
            <div className="sh_row sh_best_userinfo">
              <div className="sh_p sh_row sh_best_user">
                <p className="sh_p sh_pix">post by.</p>
                <p className="sh_p">
                  <a href="#" className="sh_a">
                    username
                  </a>
                </p>
              </div>
              <p className="sh_p day">2023. 05. 23</p>
            </div>
          </header>
          <a href="#" class="image featured">
            <img src="images/pic06.jpg" alt="" />
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

          <p>content</p>
          <p>
            {" "}
            Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin
            rhoncus, sapien mollis luctus hendrerit, orci dui viverra metus, et
            cursus nulla mi sed elit. Vestibulum condimentum, mauris a mattis
            vestibulum, urna mauris cursus lorem, eu fringilla lacus ante non
            est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt
            neque eros. Duis faucibus blandit ligula, mollis commodo risus
            sodales at. Sed rutrum et turpis vel blandit. Nullam ornare congue
            massa, at commodo nunc venenatis varius. Praesent mollis nisi at
            vestibulum aliquet. Sed sagittis congue urna ac consectetur.
          </p>
          <p>
            Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta
            velit at elementum gravida nibh eget, volutpat odio. Proin rhoncus,
            sapien mollis luctus hendrerit, orci dui viverra metus, et cursus
            nulla mi sed elit. Vestibulum condimentum, mauris a mattis
            vestibulum, urna mauris cursus lorem, eu fringilla lacus ante non
            est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt
            neque eros. Duis faucibus blandit ligula, mollis commodo risus
            sodales at. Sed rutrum et turpis vel blandit. Nullam ornare congue
            massa, at commodo nunc venenatis varius. Praesent mollis nisi at
            vestibulum aliquet. Sed sagittis congue urna ac consectetur.
          </p>
          <p>
            Vestibulum pellentesque posuere lorem non aliquam. Mauris eleifend
            eleifend felis aliquet ornare. Vestibulum porta velit at elementum
            elementum.
          </p>
        </article>
        <form>
          <div>
            <textarea
              name="comm_content"
              placeholder="Comment"
              className="ha_input"
              required
            ></textarea>
          </div>
          <button type="submit" style={{ margin: "20px 0px" }}>
            댓글 작성
          </button>
        </form>
        {/* 댓글 append */}
        <div className="sh_line" style={{ marginBottom: "20px" }}></div>
        <p>comm_create_at</p>
        <div className="sh_icon sh_a sh_row" style={{ float: "right" }}>
          <button type="submit" className="sh_icon sh_a">
            Like
          </button>
          <p className="sh_p3">44</p>
        </div>
        <div className="sh_p sh_row sh_best_user" style={{ width: "900px" }}>
          <a href="#" className="sh_profileimg">
            <img className="sh_profileimg" src="images/pic03.jpg" alt="" />
          </a>
          <p className="sh_p">
            <a href="#" className="sh_a">
              username
            </a>
          </p>
          <div
            style={{
              fontSize: "23px",
              textAlign: "center",
              marginLeft: "40px",
            }}
          >
            comm_content
          </div>
        </div>
        {/* 본인만 보이게 */}
        <div className="sh_row" style={{ justifyContent: "flex-end" }}>
          <form
            method="post"
            action="#"
            className="sh_row button"
            style={{ marginRight: "10px" }}
          >
            <button type="submit" className="sh_icon sh_a">
              수정하기
            </button>
          </form>
          <form method="post" action="#" className="sh_row button">
            <button type="submit" className="sh_icon sh_a">
              삭제하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
