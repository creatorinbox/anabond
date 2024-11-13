"use client"
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  const handleEvent = ()=>{
    setCount(count < 10 ? count + 1 : 0);
    setMsg(msg);

  }
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <h1 className="text-5xl font-bold uppercase">{count}</h1>
      {msg ? <p>Value Increse</p>: ""}
      <button className="border border-gary-500 px-4 py-2" onClick={handleEvent}>+</button>
    </div>
    
  );
}
