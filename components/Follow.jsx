"use client"
import React from "react";
import { useState } from "react";

function Follow({ followerId, followId }) {
  console.log(followId)
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/users/follow/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fl: followId }),
      });

      if (response.status === 201) {
        setIsFollowing((prevState) => !prevState); // 토글 상태로 변경
        console.log('Follow successful');
      }
    } catch (error) {
      console.error('Follow error:', error);
    }
  };

  return (
    <form method="post" action="#" className="sh_row sh_icon">
      <button
        type="submit"
        onClick={handleFollow}
        disabled={isFollowing}
        className="sh_icon sh_a sh_p3"
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </form>
  );
}

export default Follow;
