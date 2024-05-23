"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
// server by default for better security and performance

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-lvw h-lvh items-center justify-center gap-4">
      <h1 className="">Hi, this is next js course</h1>
      <Link href="products">Navigate to products</Link>
      <Link href="accounts">Navigate to accounts</Link>
      <h1 className=" font-bold">
        Navigating with useRouter() - a alternate way
      </h1>
      <button onClick={() => router.push("/products")} className=" border p-5">
        Navigate to products
      </button>
    </div>
  );
}
