"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { usePsyStore } from "../../store/store"


export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);

  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);

  console.log(psyData);
  console.log(psyData.quizData);



  useEffect(() => {
    console.log("目前分數：" + psyData.score);
  }, [psyData.score]);



  function nextQuestion(optionIndex: any) {
    console.log("使用者選擇：" + optionIndex);

    setPsyScore(psyData.score + psyData.quizData[questionIndex].options[optionIndex].value);
    console.log(psyData.score);


    if (questionIndex != psyData.quizData.length - 1) {
      console.log("下一題～");
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("進入準備看結果頁面");
      router.push("/prepare");
    }

  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">

        <div className="flex flex-col items-center gap-[26px] mb-8">
          <div className="text-left font-extrabold px-4 text-[20px]">{"Q" + (questionIndex + 1) + "."}</div>
          <div className="text-left font-extrabold px-4 h-[66px] text-[20px]">{psyData.quizData[questionIndex].title}</div>
          
          <div className="flex flex-col items-center px-4 gap-2 w-[400px]">
          <div className="flex items-center justify-start h-[66px] rounded-full bg-[#6E6698] text-white 
                           hover:bg-[#8982ad] transition-transform 
                           text-[16px] px-6 py-2 mb-1.5 w-full max-w-[320px] cursor-pointer" 
               onClick={() => nextQuestion(0)}>{psyData.quizData[questionIndex].options[0].text}</div>
               
            <div className="flex items-center justify-start h-[66px] rounded-full bg-[#6E6698] text-white 
                           hover:bg-[#8982ad] transition-transform 
                           text-[16px] px-6 py-2 mb-1.5 w-full max-w-[320px] cursor-pointer" 
                 onClick={() => nextQuestion(1)}>{psyData.quizData[questionIndex].options[1].text}</div>
            <div className="flex items-center justify-start h-[66px] rounded-full bg-[#6E6698] text-white 
                           hover:bg-[#8982ad] transition-transform 
                           text-[16px] px-6 py-2 mb-1.5 w-full max-w-[320px] cursor-pointer" 
                 onClick={() => nextQuestion(2)}>{psyData.quizData[questionIndex].options[2].text}</div>
            <div className="flex items-center justify-start h-[66px] rounded-full bg-[#6E6698] text-white 
                           hover:bg-[#8982ad] transition-transform 
                           text-[16px] px-6 py-2 mb-1.5 w-full max-w-[320px] cursor-pointer" 
                 onClick={() => nextQuestion(3)}>{psyData.quizData[questionIndex].options[3].text}</div>
          </div>

        </div>

        {/* <Link className="text-white bg-black px-3 py-2" href="/prepare">準備看結果</Link> */}
      </div>
    </>
  );

}
