"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Prepare() {

  

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        
        <Link className="rounded-full text-white bg-black px-3 py-2" href="/result">查看孵化成功的恐龍</Link>
      </div>
    </>
  );

}
