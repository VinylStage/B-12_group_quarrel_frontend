"use client";
import React from 'react';
import FollowerView from './[user_id]/page';

function FollowerPage() {
  const user_id = 5; // 실제 사용자 ID를 여기에 할당

  return (
    <div>
      <h1>Follower List</h1>
      <FollowerView user_id={user_id} />
    </div>
  );
}

export default FollowerPage;