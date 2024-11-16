"use client"
import Header from "@/components/header";
import Slide from "@/components/slide";
import { useState } from "react";
import { motion } from "framer-motion"

export default function Home() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  const handleEvent = ()=>{
    setCount(count < 10 ? count + 1 : 0);
    setMsg(msg);

  }
  return (
    <div className="min-h-screen">
      <Header/>
      <Slide />
      <motion.section 
      className="flex w-full bg-gray-100 my-3  px-2"
      animate={{x:0}}
      initial={{x: '100vw'}}
      >
        <div className="w-full md:w-1/4 bg-gray-200 p-5 md:p-10 rounded-lg shadow-lg">
          <h3 className="text-lg">ABOUT ANABOND</h3>
          <h3 className="text-3xl text-green-600 mt-3">Pioneers of Anaerobic adhesives in India.</h3>
        </div>
        <div className="w-full md:w-3/4 p-5 md:p-10">
        </div>
      </motion.section>
    </div>
  );
}
