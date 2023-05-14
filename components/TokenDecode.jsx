"use client";
import jwt from "jsonwebtoken";
import React from "react";

export default TD;
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
  const decodedToken = decodeToken(token);
  if (decodedToken) {
    // 토큰이 성공적으로 디코딩되었을 때
    console.log(decodedToken);
    // 디코딩된 토큰 안의 정보에 접근
    const userId = decodedToken.user_id;
    // ...
  } else {
    // 토큰 디코딩에 실패했을 때
    console.log("Token decoding failed.");
  }
}
