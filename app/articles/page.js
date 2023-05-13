"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function create() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const router = useRouter();
  const token = localStorage.getItem("access");
  async function handleArticle() {
    const response = await fetch("http://127.0.0.1:8000/articles/1/", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        category: category,
        title: title,
        content: content,
        file: file,
      }),
    });
    router.push("/articles/category_id");
    router.refresh();
  }
  return (
    <form method="post" action="/create-post/" className="ha_box">
        <h2> 게시글 작성 </h2>
        <label for="category">Category:</label>
        <textarea name="name" className="ha_input" placeholder="카테고리를 입력해주세요."></textarea>
        
        <label for="title">Title:</label>
        <textarea name="title" className="ha_input" placeholder="게시글 제목을 입력해주세요."></textarea>            
        
        <label for="content">Content:</label>
        <textarea name="content" className="ha_input" placeholder="게시글 내용을 입력해주세요."></textarea>
        
        <label for="comment">Article_image:</label>
        <div class="input-group mb-3 ha_imginput"></div>
        <input type="file" class="form-control" id="profile-image" name="profile-image" accept="image/*"/>
        <textarea name="img" className="ha_url" placeholder="게시글 사진 url을 입력해주세요."></textarea>
        
        <div className="ha_box2">
            <button type="submit" className="ha_bnt">등록</button>
            <button type="submit">취소</button>
        </div>
    </form>
  );
}
