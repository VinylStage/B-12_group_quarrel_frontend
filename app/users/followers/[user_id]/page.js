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

  return (
    <div>
      {/* follows 데이터를 사용하여 UI 렌더링 */}
      {followers.map((follow)  => {
        console.log(follow);
        return <div key={follow.id}>{follow.follower}</div>
})}
    </div>
  );
}


