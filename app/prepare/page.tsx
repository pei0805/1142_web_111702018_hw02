"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Prepare() {

  

  return (
    <>
      <div className="flex flex-col items-center gap-8">
      <img alt="egg" src="/egg.png"></img>
        <Link className="rounded-full font-bold border-2 border-[#291811] text-[#291811] bg-[#fffc7c] px-10 py-2 shadow-[0_6px_0_-2px_#FFB347,0_6px_0_0_#291811]" href="/result">查看孵化成功的恐龍</Link>
      </div>
    </>
  );

}
