"use client"
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation"

type DinoResult = {
  name: string;
  image: string;
  partnerImage: string;
  nemesisImage: string;
  description: string;
  hashtags: [string, string, string];
  partner: string;
  nemesis: string;
};

const RESULTS: DinoResult[] = [
  {
    name: "暴龍",
    image: "/Tyrannosaurus01.png",
    partnerImage: "/Brachiosaurus02.png",
    nemesisImage: "/Velociraptor02.png",
    description: "面對未知的挑戰，你從不退縮，反而覺得血液沸騰。你擁有極強的直覺與決斷力，做事乾脆俐落，最討厭拖泥帶水。在群體中，你自帶耀眼的「主角光環」，雖然有時看起來氣場強大、有點霸道，但其實你非常保護自己珍視的人。只要有你在的地方，氣氛永遠充滿熱情與無畏的活力！",
    hashtags: ["#直覺敏銳", "#行動力爆表", "#霸氣護短"],
    partner: "腕龍",
    nemesis: "迅猛龍",
  },
  {
    name: "三角龍",
    image: "/Triceratops01.png",
    partnerImage: "/Velociraptor02.png",
    nemesisImage: "/Brachiosaurus02.png",
    description: "你的個性穩重踏實，比起盲目追求刺激，你更在乎內心的平靜與身邊人的感受。你自帶一層堅強的「防護盾」，用來抵禦外界的干擾，並溫柔地守護你在乎的人事物。你的內心柔軟且充滿同理心，只要被你認定為朋友，就能感受到你無微不至的照顧，是個溫暖又充滿力量的存在。",
    hashtags: ["#溫暖踏實", "#外剛內柔", "#滿滿安全感"],
    partner: "迅猛龍",
    nemesis: "腕龍",
  },
  {
    name: "腕龍",
    image: "/Brachiosaurus01.png",
    partnerImage: "/Tyrannosaurus02.png",
    nemesisImage: "/Triceratops02.png",
    description: "因為「站得高，看得遠」，你總能用更宏觀的視角來看待世界，不會為了一時的挫折或生活中的小事斤斤計較。你喜歡按照自己的步調生活，身上自帶一種讓人放鬆的「Chill」氣場。你是個懂得享受生活沿途風景的和平主義者，與你相處總能讓人感到無比的平靜與療癒。",
    hashtags: ["#隨遇而安", "#和平主義", "#優雅Chill"],
    partner: "暴龍",
    nemesis: "三角龍",
  },
  {
    name: "迅猛龍",
    image: "/Velociraptor01.png",
    partnerImage: "/Triceratops02.png",
    nemesisImage: "/Tyrannosaurus02.png",
    description: "你的大腦就像一台高速運轉的超級電腦！你對這個世界充滿好奇心，擁有極強的環境適應力與敏銳的洞察力。面對突如其來的問題，你總能保持冷靜，快速抽絲剝繭找出最佳解法。雖然有時因為太聰明、看事情太透徹而給人一點高冷感，但其實你是團隊中最不可或缺的智囊，總能在關鍵時刻帶領大家突破難關！",
    hashtags: ["#冷靜分析", "#靈活應變", "#洞察人心"],
    partner: "三角龍",
    nemesis: "暴龍",
  },
];

function getResult(score: number): DinoResult {
  if (score < 12) return RESULTS[0];
  if (score < 18) return RESULTS[1];
  if (score < 23) return RESULTS[2];
  return RESULTS[3];
}

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  const result = getResult(psyData.score);

  function playAgain() {
    setPsyScore(0);
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center gap-4 pb-4">

      {/* 圖片 */}
      <div className="w-full rounded-2xl overflow-hidden">
        <img src={result.image} alt={result.name} className="w-full object-cover" />
      </div>

      {/* Hashtag */}
      <div className="w-full rounded-2xl p-2 flex flex-wrap gap-4 justify-center">
        {result.hashtags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border-2 border-[#88d5ff] bg-[#c4e4ff] px-4 py-1 text-[14px] font-bold text-[#291811]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 恐龍名稱 + 解析 */}
      <div className="w-full rounded-2xl border-2 border-[#291811] bg-white p-4 flex flex-col gap-2">
        <div className="font-extrabold text-[22px] text-[#291811]">你是{result.name}！</div>
        <div className="text-[15px] text-[#291811] leading-relaxed">{result.description}</div>
      </div>



      {/* 最佳搭檔 + 八字不合 */}
      <div className="w-full flex gap-3">
        <div className="flex flex-col flex-1 rounded-2xl border-2 border-[#291811] bg-white p-4 gap-3 items-center">
          <div className="bg-[#ffeec0] border-2 border-[#291811] rounded-full p-2 font-extrabold text-[16px] text-[#291811]">最佳搭檔</div>
          <img src={result.partnerImage} alt={result.partner} className="w-full aspect-square rounded-xl object-cover" />
          <div className="font-bold text-[16px] text-[#291811]">{result.partner}</div>
        </div>
        <div className="flex flex-col flex-1 rounded-2xl border-2 border-[#291811] bg-white p-4 gap-3 items-center">
          <div className="bg-[#ffeec0] border-2 border-[#291811] rounded-full p-2 font-extrabold text-[16px] text-[#291811]">八字不合</div>
          <img src={result.nemesisImage} alt={result.nemesis} className="w-full aspect-square rounded-xl object-cover" />
          <div className="font-bold text-[16px] text-[#291811]">{result.nemesis}</div>
        </div>
      </div>

      {/* 再玩一次 */}
      <div
        className="rounded-full font-bold border-2 border-[#291811] text-[#291811] bg-[#fffc7c] px-10 py-2 shadow-[0_6px_0_-2px_#FFB347,0_6px_0_0_#291811] cursor-pointer"
        onClick={playAgain}
      >
        再玩一次
      </div>

    </div>
  );
}
