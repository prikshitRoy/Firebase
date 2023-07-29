import React from "react";
import NaveBar from "@/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <NaveBar />
      <div className="mt-24">
        <div className="absolute left-0 p-4">Left Side</div>
        <div className="absolute right-0  p-4">Right Side</div>
      </div>
    </main>
  );
}
