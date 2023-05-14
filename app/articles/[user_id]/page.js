"use client";

export default function Page() {
  async function getArticles() {
    const response = await fetch("http://127.0.0.1:8000/articles/1/", {
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(response);
  }
  return (
    <form method="get">
      <div>
        <p>This is</p>
        <button onClick={getArticles} type="submit">
          This is
        </button>
      </div>
    </form>
  );
}