"use client";
import jwt from "jsonwebtoken";
import React from "react";
import { useEffect } from "react";

function MyPage() {
  useEffect(() => {
    TD();
  }, []);
  function TD() {
    const decodeToken = (token) => {
      try {
        const decoded = jwt.decode(token);
        return decoded;
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    };

    // 사용 예시
    const token = localStorage.getItem("access");
    const userId = decodeToken(token).user_id;
  }
  return <a href="/users/{userId}">MyPage</a>;
}

export default MyPage;
