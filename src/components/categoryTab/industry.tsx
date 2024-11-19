"client use";

import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCard from "../categoryCard";
import {useState } from "react";

const Industry = () => {
    const IndustryArray = [
        {
        category:"Industry-1" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        },
        {
        category:"Industry-2" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        },
        {
        category:"Industry-3" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        },
        {
        category:"Industry-4" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        },
        {
        category:"Industry-5" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        }
        ,
        {
        category:"Industry-6" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        }
        ,
        {
        category:"Industry-7" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        }

    ];
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
    className="flex cursor-pointer top-[50%] z-10 translate-y-[-50%] absolute w-8 h-8 items-center justify-center rounded-full text-white bg-red-600 hover:bg-red-800">
    <ChevronLeft />
    </div>
    )}
    
    
    <div 
    className="flex gap-[16px] transform duration-300" 
    style={{marginLeft:sliderPostion, width:cardSlid*IndustryArray.length}}>
        {IndustryArray.map((item, idx) =>
        <CategoryCard 
        key={idx}
        category={item.category}
        img={item.img}
        />
    )}
    </div>

    {sliderPostion === -cardSlid*(IndustryArray.length-2) ? null : (
    <div 
    onClick={moveRight}
    className="flex cursor-pointer z-10 right-0 top-[50%] translate-y-[-50%] absolute w-8 h-8 items-center justify-center rounded-full text-white bg-red-600 hover:bg-red-800">
    <ChevronRight />
    </div>
    )}
    </div>

  )
}

export default Industry