"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function LikeView() {
  const router = useRouter();
  const token = localStorage.getItem("access");
  const handleLike = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.post(
        "http://localhost:8000/detail/<int:article_id>/likes/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
    router.refresh();
  };
  return (
    <button onClick={handleLike} type="submit" className="sh_icon sh_a">
      like
    </button>
  );
}

export default LikeView;
