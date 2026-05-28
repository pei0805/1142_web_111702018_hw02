"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from '@heroui/react';
import { ColorSlider, Label } from '@heroui/react';
import { parseColor } from "react-aria-components";
import ActionButton from "@/component/ActionButton";

export default function Home() {

  //階段名稱      路由規劃
  //1. 歡迎畫面   /
  //2. 答題      /question
  //3. 準備看結果 /prepare
  //4. 看結果    /result
  // https://psy-test.com/love/result?id=10


  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="text-left font-black px-4 text-[40px] text-[#291811]">孵化你的專屬恐龍</div>
        <div className="text-left text-[14px] font-medium text-[#291811]">
          在未知的史前神秘島嶼上，<br />
          散落著許多散發微光的遠古化石蛋。<br />
          你在旅途中的每一個感官選擇，<br />
          都會孵化出一隻與你性格最合拍的專屬小恐龍。<br />
          <br />
          現在，就背上你的探險背包，<br />
          踏上尋找你命定恐龍的奇妙旅程吧！
        </div>
        <Link href="/question" className="rounded-full font-bold border-2 border-[#291811] text-[#291811] bg-[#fffc7c] px-10 py-2 shadow-[0_6px_0_-2px_#FFB347,0_6px_0_0_#291811]">
          開始測驗
        </Link>

      </div>
    </>
  );
}
