"use client";
import React from 'react';
import FollowView from './[user_id]/page';

function FollowPage() {
  const user_id = 4; // 실제 사용자 ID를 여기에 할당

  return (
    <div>
      <h1>Follow List</h1>
      <FollowView user_id={user_id} />
    </div>
  );
}

export default FollowPage;