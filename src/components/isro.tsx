"use client";

import Button from "./button";
import FireSvg from "./fire-svg";

const Isro = () => {
  return (
    <div 
    style={{backgroundImage:"URL('glowing-galaxy.webp')"}}
    className="grid relative grid-cols-2 py-10 h-[650px] bg-cover bg-center bg-fixed" >
      <div className="absolute bg-slate-950 w-full h-full opacity-25"></div>
      <div className="flex items-center justify-center">
      <div className="grid w-2/3">
      <h1 className="w-full drop-shadow-xl text-xl font-bold md:text-4xl mb-3 text-white mt-3">Serving the country with pride!</h1>
      <h5 className="text-white drop-shadow-xl mb-5">Anabond is proud to deliver custom products for applications across the Indian Defence and Space programs.</h5>
      <Button text="Learn More" />
      </div>
      </div>
        <div className="relative m-auto h-[550px] transform rotate-12">
        <img 
        className="h-[100%]"
        src="gslv.webp" alt="gslv" />

        <div className="absolute left-[5px] bottom-[-120px]"><FireSvg /></div>
        <div className="absolute left-[50px] bottom-[-100px]"><FireSvg /></div>
        <div className="absolute left-[98px] bottom-[-120px]"><FireSvg /></div>
</div>
    </div>
  )
}

export default Isro