"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function Page() {
  async function getArticles() {
    const router = useRouter();
    router.refresh;
  }
  return (
    <form>
      <div>
        <p>This is</p>
        <button onClick={getArticles} type="submit">
          This is
        </button>
      </div>
    </form>
  );
}
