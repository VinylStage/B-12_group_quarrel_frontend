"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function DeleteView() {
  const router = useRouter();
  const token = localStorage.getItem("access");
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.delete(
        "http://localhost:8000/detail/<int:article_id>/",
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
    <button onClick={handleDelete} type="submit" className="sh_icon sh_a">
      삭제하기
    </button>
  );
}

export default DeleteView;
