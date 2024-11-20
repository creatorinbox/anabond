"use client"
import Header from "@/components/header";
import Slide from "@/components/slide";
import { useState } from "react";
import { motion } from "framer-motion"
import IconBox from "@/components/iconBox";
import { Atom } from 'lucide-react';
import CategoryTab from "@/components/categoryTab/categoryTab";
import H2 from "@/components/h2";
import Isro from "@/components/isro";
import Footer from "@/components/footer";
import Button from "@/components/button";

export default function Home() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  const handleEvent = ()=>{
    setCount(count < 10 ? count + 1 : 0);
    setMsg(msg);

  }
  return (
    <div className="min-h-screen max-w-full">
      <Header/>
      <Slide />
      <motion.section 
      className="max-w-full bg-gray-100 my-3 px-2 py-10"
      animate={{x:0}}
      initial={{x: '100vw'}}
      >
        <H2 text='ABOUT ANABOND' />
        <div className="grid place-items-center gap-3 container">
        <div className="grid w-full place-items-center text-center md:w-2/3 px-3 rounded-xl mb-10">
          <h1 className="w-full font-bold text-2xl md:text-3xl text-green-600 my-3">Pioneers of Anaerobic adhesives in India.</h1>
          <p className="mb-5">We take pride in being the first company in the country to manufacture anaerobic adhesives, setting new standards in the industry. Our commitment to reliable manufacturing quality has established Anabond as a leading import substitute and a trusted partner for businesses seeking high-performance chemical solutions.</p>
          <Button text="Learn More" />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 w-full md:px-5">
        <IconBox title="Research & Development" text="In house R&D developing indigenous anaerobic adhesives." imgURI="chemistry.gif" />
        <IconBox title="Certiﬁed" text="Accredited on twin pillars of quality and environmental" imgURI="privacy-policy.gif" />
        <IconBox title="Capacity" text="Large-scale manufacturing capabilities." imgURI="connection.gif" />
        <IconBox title="Assurance" text="Quality products at superior value." imgURI="verified.gif" />
        </div>
        </div>
      </motion.section>
      <Isro />
      <div 
      style={{background: "radial-gradient(circle, rgba(229,245,234,1) 45%, rgba(168,211,183,1) 100%)"}}
      >
      <CategoryTab />
      </div>
      <Footer />
    </div>
  );
}
