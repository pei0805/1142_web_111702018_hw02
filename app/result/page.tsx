"use client"
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation"

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore( (state)=> state.psyData );
  const setPsyScore = usePsyStore( (state) => state.setScore );
  const [psyResult, setPsyResult] = useState(<></>);
  
  useEffect( ()=>{
    getResult();
  }, [psyData.score]);


  function getResult(){
    if( psyData.score < 12 ){
      setPsyResult(<div>暴龍</div>);
    }else if( psyData.score >= 12 && psyData.score < 18 ){
      setPsyResult(<div>三角龍</div>);
    }else if( psyData.score >= 18 && psyData.score < 23 ){
      setPsyResult(<div>腕龍</div>);
    }else{
      setPsyResult(<div>迅猛龍</div>);
    }
  }

  function playAgain(){
    setPsyScore(0);
    router.push("/");
  }

  
  
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        
        結果，目前積分：{psyData.score}
        
        {psyResult}
        
        <div 
          className="rounded-full font-bold border-2 border-[#291811] text-[#291811] bg-[#fffc7c] px-10 py-2 shadow-[0_6px_0_-2px_#FFB347,0_6px_0_0_#291811]" 
          onClick={playAgain}>
          再玩一次
        </div>
      </div>
    </>
  );

}
