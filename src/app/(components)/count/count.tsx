
'use client'
import { useState } from "react";


export default function Count() {
  // const [count, setCount] = useState(0)
  const namesList=["Afzal faizi"," Mian Haroon","Ali Hassan","Badar","Zaid Goraya","Ali Haidar Gujjar","Noman","Farman","Shahid"]
  const[index, setIndex] = useState(0)

  // var count =0;
  const nextHandler = ()=>{
    // count = count + 1
    setIndex(index+1)
    console.log("count",namesList)
  } 
  const previousHandler = ()=>{
    // count = count - 1
    setIndex(index-1)
    console.log("count",namesList)
  }
  return (
    <div className="flex justify-between items-center mt-8">
      <button onClick={previousHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Back
      </button>
      <span className="font-bold text-4xl">{namesList[index]}</span>
      <button onClick={nextHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        Next
      </button>
    </div>

   
    
  )
}
