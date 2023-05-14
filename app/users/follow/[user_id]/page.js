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

  return(
    <div>
    {follows.map((follow) => (
      <div key = {follow.id} className="sh_p sh_row sh_best_user">
        <a href="#" className="sh_profileimg">
          <img className="sh_profileimg" src={follow.followimage}alt=""/>
        </a>
        <p className="sh_p">
           <a href="#" className="sh_a">{follow.follow}</a>
        </p>
      </div>
    ))}
    </div>
  );
}

// export default function FollowButton({ followerId, followId }) {
//   const [isFollowing, setIsFollowing] = useState(false);

//   const handleFollow = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/users/follow/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ fl: followId }),
//       });

//       if (response.status === 201) {
//         setIsFollowing((prevState) => !prevState); // 토글 상태로 변경
//         console.log('Follow successful');
//       }
//     } catch (error) {
//       console.error('Follow error:', error);
//     }
//   };

//   return (
//     <button onClick={handleFollow} disabled={isFollowing}>
//       {isFollowing ? 'Unfollow' : 'Follow'} {/* 팔로우 상태에 따라 버튼 텍스트 변경 */}
//     </button>
//   );
// }