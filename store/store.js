// src/store.js
import { create } from 'zustand'

const questionData = [
    {
      title: "時光機艙門開啟，你踏上了一座未知的史前島嶼。第一眼最吸引你的景色是？",
      options:[
        {
          text: "遠方正噴發著壯麗火山灰，充滿原始力量的山峰",
          value: 1
        },
        {
          text: "陽光灑落、長滿巨大蕨類與柔軟苔蘚的茂密森林",
          value: 2
        },
        {
          text: "視野遼闊、微風吹拂的一望無際大草原",
          value: 3 
        },
        {
          text: "瀰漫著神秘晨霧、地形錯綜複雜的峽谷遺跡",
          value: 4
        }
      ]
    },
    {
      title: "在草叢中，你發現了一顆散發著微光的史前奇異化石。你會直覺用什麼手勢跟它互動？",
      options:[
        {
          text: "單指快速點擊或敲擊，看看它會不會有什麼機關反應",
          value: 1
        },
        {
          text: "雙手輕輕捧起，感受它傳來的奇妙溫度與重量",
          value: 2
        },
        {
          text: "雙指捏合放大，仔細欣賞它表面的美麗紋理",
          value: 3 
        },
        {
          text: "在半空中輕輕拖拽旋轉，從360度全方位觀察它的結構",
          value: 4 
        }
      ]
    },
    {
      title: "叢林深處突然傳來一陣巨大而未知的低沉吼聲，你的第一反應是？",
      options:[
        {
          text: "腎上腺素飆升！往聲音的方向前進一探究竟",
          value: 1
        },
        {
          text: "立刻進入警戒狀態，張開雙臂保護身邊的同伴或裝備",
          value: 2
        },
        {
          text: "不慌不忙，慢慢移動到地勢較高的地方觀察全局",
          value: 3 
        },
        {
          text: "迅速閃身躲進隱蔽的樹叢，大腦開始快速分析聲音來源",
          value: 4
        }
      ]
    },
    {
      title: "探險了一整天，肚子咕嚕咕嚕叫。如果可以選擇，你想品嚐哪種史前大餐？",
      options:[
        {
          text: "看起來色彩鮮豔、充滿刺激辛香風味的奇異果實",
          value: 1
        },
        {
          text: "散發著泥土清香、口感紮實有飽足感的巨型塊根",
          value: 2
        },
        {
          text: "生長在樹冠最頂端、吸收飽滿陽光的鮮甜嫩葉",
          value: 3 
        },
        {
          text: "需要動點腦筋和技巧才能抓到的敏捷發光小魚",
          value: 4 
        }
      ]
    },
    {
      title: "你在河畔遇到了一群剛孵化、圓滾滾的恐龍寶寶，你會怎麼陪牠們玩？",
      options:[
        {
          text: "跟牠們來一場充滿活力的賽跑或追逐戰",
          value: 1
        },
        {
          text: "讓牠們爬到你背上，充當牠們最穩固的遊樂設施",
          value: 2
        },
        {
          text: "靜靜坐在旁邊，讓牠們在你巨大的影子下安心午睡",
          value: 3 
        },
        {
          text: "拿樹枝在地上畫畫，教牠們玩簡單的躲貓貓或解謎遊戲",
          value: 4 
        }
      ]
    },
    {
      title: "時光機發出返航提醒，你想記得哪段回憶？",
      options:[
        {
          text: "以壯麗火山或巨大恐龍腳印為背景的超酷自拍",
          value: 1
        },
        {
          text: "和探險夥伴們圍繞在營火旁，溫馨笑鬧的合照",
          value: 2
        },
        {
          text: "一段記錄著星空變化與巨大草食恐龍緩慢遷徙的縮影影片",
          value: 3 
        },
        {
          text: "各種奇形怪狀的發光植物與神祕峽谷地貌的微距特寫",
          value: 4 
        }
      ]
    },
    {
      title: "回到現代後，你發現口袋裡意外帶回了一個史前紀念品，你覺得那是？",
      options:[
        {
          text: "一顆銳利無比、閃閃發光的恐龍牙齒",
          value: 1
        },
        {
          text: "一塊觸感溫潤、印著完美蕨類葉脈的化石",
          value: 2
        },
        {
          text: "一根巨大無比、在陽光下會折射出彩虹光的羽毛",
          value: 3 
        },
        {
          text: "一塊包裹著史前神秘發光昆蟲的晶瑩琥珀",
          value: 4 
        }
      ]
    }
];


// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    psyData:{
        score: 0,
        quizData: questionData
    },
    setScore: (score) => set( (state) => ( { psyData: { ...state.psyData, score: score}} )  )

}))


export { usePsyStore }



