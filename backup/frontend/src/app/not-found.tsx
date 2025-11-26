"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-9xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold font-display tracking-tight">
          404
        </h1>
        <Link 
          href="/" 
          className="block mt-8 text-lg font-bold font-display hover:opacity-70 transition-opacity"
        >
          Home
        </Link>
      </div>
    </main>
  );
}

