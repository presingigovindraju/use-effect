import React,{useState,useEffect} from "react";




const App =()=>{
   const [gold,setGold] = useState(0)
   const [silver,setSilver] = useState(0)
   const [bronze,setBronze] = useState(0)

   useEffect(()=>{
    document.title=`Gold : ${gold} | Silver : ${silver} | bronze : ${bronze}`
   },[gold])


  return (
    <div>
      <p>Gold:{gold}</p>
      <p>Silver:{silver}</p>
      <p>Bronze:{bronze}</p>
      <button onClick={()=>setGold(gold+1)}>Gold</button>
      <button onClick={()=>setSilver(silver+1)}>Silver</button>
      <button onClick={()=>setBronze(bronze+1)}>Bronze</button>
    </div>
  )
}

export default App