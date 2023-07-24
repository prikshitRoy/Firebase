import React from "react";
import NaveBar from "@/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <NaveBar />
      <div className="mt-24">
        <div className="absolute left-0 pl-4">Left Side</div>
        <div className="absolute right-0  pr-4">Right Side</div>
      </div>
    </main>
  );
}
