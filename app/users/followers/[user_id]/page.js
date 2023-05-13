"use client";
import { useRouter } from "next/router";
import Router from "next/router";
export default function SlugPage() {
  const router = useRouter;
  const user_id = router.query;
  console.log(user_id);
  console.log(router);
  console.log(Router);
  return <div>This is {user_id}</div>;
}
