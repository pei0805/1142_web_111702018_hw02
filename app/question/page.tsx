"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { usePsyStore } from "../../store/store"
import Image from "next/image"


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
          <div className="bg-white border-12 border-[#95D664] rounded-[2rem] ring-[3px] ring-[#291811] p-8 min-h-[250px] flex flex-col items-center justify-center">
            <div className="text-left font-extrabold px-4 text-[20px]">{"Q" + (questionIndex + 1) + "."}</div>
            <div className="text-left font-extrabold px-4 min-h-[66px] text-[20px]">{psyData.quizData[questionIndex].title}</div>
          </div>
          <div className="flex flex-col items-center px-4 gap-2 w-full">
            <div className="flex items-center justify-start min-h-[66px] rounded-full border-2 border-[#291811] bg-[#ccffcc] text-[#291811]
                           font-bold hover:bg-[#67db78] transition-transform
                           text-[16px] px-6 py-2 mb-1.5 w-full cursor-pointer
                           shadow-[0_6px_0_-2px_#99ff99,0_6px_0_0_#291811]"
              onClick={() => nextQuestion(0)}>{psyData.quizData[questionIndex].options[0].text}</div>

            <div className="flex items-center justify-start min-h-[66px] rounded-full border-2 border-[#291811] bg-[#ccffcc] text-[#291811]
                           font-bold hover:bg-[#67db78] transition-transform
                           text-[16px] px-6 py-2 mb-1.5 w-full cursor-pointer
                           shadow-[0_6px_0_-2px_#99ff99,0_6px_0_0_#291811]"
              onClick={() => nextQuestion(1)}>{psyData.quizData[questionIndex].options[1].text}</div>
            <div className="flex items-center justify-start min-h-[66px] rounded-full border-2 border-[#291811] bg-[#ccffcc] text-[#291811]
                           font-bold hover:bg-[#67db78] transition-transform
                           text-[16px] px-6 py-2 mb-1.5 w-full cursor-pointer
                           shadow-[0_6px_0_-2px_#99ff99,0_6px_0_0_#291811]"
              onClick={() => nextQuestion(2)}>{psyData.quizData[questionIndex].options[2].text}</div>
            <div className="flex items-center justify-start min-h-[66px] rounded-full border-2 border-[#291811] bg-[#ccffcc] text-[#291811]
                           font-bold hover:bg-[#67db78] transition-transform
                           text-[16px] px-6 py-2 mb-1.5 w-full cursor-pointer
                           shadow-[0_6px_0_-2px_#99ff99,0_6px_0_0_#291811]"
              onClick={() => nextQuestion(3)}>{psyData.quizData[questionIndex].options[3].text}</div>
          </div>

        </div>

      </div>
    </>
  );

}
