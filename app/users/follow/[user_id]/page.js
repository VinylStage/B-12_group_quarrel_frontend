"use client";
import React, { useState, useEffect  } from "react";

export default function FollowView({ user_id }) {
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/users/follow/${user_id}`);
        const data = await response.json();
        console.log(data);
        setFollows(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user_id]);

  return (
    <div>
      {/* follows 데이터를 사용하여 UI 렌더링 */}
      {follows.map((follow)  => {
        return <div key={follow.id}>{follow.follow}</div>
})}
    </div>
  );
}


