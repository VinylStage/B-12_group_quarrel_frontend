"use client";
import React, { useState, useEffect  } from "react";

export default function FollowerView({ user_id }) {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/followers/${user_id}`);
        const data = await response.json();
        console.log(data);
        setFollowers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user_id]);

return(
  <div>
  {followers.map((follower) => (
    <div key = {follower.id}>
    <article id="content">
    <div className="sh_p sh_row sh_best_user">
        <a href={`/users/followers/${follower.fw}`} className="sh_profileimg">
            <img className="sh_profileimg" src={follower.followerimage} alt=""/>
        </a>
        <p className="sh_p">
            <a href={`/users/followers/${follower.fw}`} className="sh_a">{follower.follower}</a>
        </p>
    </div>
    <div className="sh_line"></div>
    </article>
    </div> 
  ))}
  </div>
);
}
     