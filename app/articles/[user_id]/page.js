'use client'

export default function Page() {
  async function getArticles(){
    const response = await fetch('http://127.0.0.1:8000/articles/<int:article_id>/')

  }
  return <p>This is</p>;
}