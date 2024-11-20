"client use";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {useState } from "react";
import Link from "next/link";

interface ProductCarouselProps {
  linkArray: Array<{ category: string; img: string; link: string; }>;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({linkArray}) => {
    
    const cardWidth = 200;
    const cardSlid = cardWidth + 8;
    
    
    const [sliderPostion, setSliderPostion] = useState(0);
    const moveLeft = () =>{setSliderPostion(sliderPostion + cardSlid)};
    const moveRight = () =>{setSliderPostion(sliderPostion - cardSlid)};
    console.log(sliderPostion);
  return (
    <div className="w-full relative overflow-x-hidden">
    {sliderPostion === 0 ? null : (
    <div 
    onClick={moveLeft}
    className="flex cursor-pointer top-[50%] z-10 translate-y-[-50%] absolute shadow-lg w-10 h-10 items-center justify-center rounded-full text-white bg-red-600 hover:bg-red-800">
    <ChevronLeft />
    </div>
    )}
    
    
    <div 
    className="flex gap-[16px] transform duration-300" 
    style={{marginLeft:sliderPostion, width:cardSlid*linkArray.length}}>
        {linkArray?.map((item, idx) =>(
              <div className="flex flex-col w-[200px]" key={idx}>
              {/* <img 
              className="object-cover rounded-xl mb-1"
              src={item.img} alt={item.category} /> */}
              <img className="rounded-lg mb-1" src="default.webp" alt="default" />
              <div className="flex bg-green-50 shadow-lg  pl-2 pr-1 py-1 rounded-lg">
                <div className="flex flex-col justify-center w-10/12">
                  <h4 className="text-md font-bold">{item.category}</h4>
                </div>
                <Link
                className="flex w-8 h-8 rounded-full bg-green-600 hover:bg-green-800 items-center justify-center text-white"
                 type="button"
                href={item.link}>
                <ChevronRight />
                </Link>
              </div>
            </div>
   ) )}
    </div>

    {sliderPostion === -cardSlid*(linkArray.length-2) ? null : (
    <div 
    onClick={moveRight}
    className="flex cursor-pointer z-10 right-0 shadow-lg top-[50%] translate-y-[-50%] absolute w-10 h-10 items-center justify-center rounded-full text-white bg-red-600 hover:bg-red-800">
    <ChevronRight />
    </div>
    )}
    </div>

  )
}

export default ProductCarousel