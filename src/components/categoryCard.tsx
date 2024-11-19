"use client";

import { ChevronRight } from "lucide-react";
import { Url } from "url";

interface CategoryCardProps {
    category: string;
    img: string;
    onClick?: (e: any) => void;
  }
  
  const CategoryCard: React.FC<CategoryCardProps> = ({ category, img, onClick }) => {
    return (
      <div className="flex flex-col w-[200px]">
        {/* <img 
        className="object-cover rounded-xl mb-1"
        src={img} alt={category} /> */}
        <img className="rounded-lg mb-1" src="default.webp" alt="default" />
        <div className="flex bg-gray-300 pl-2 pr-1 py-1 rounded-lg">
          <div className="flex flex-col justify-center w-10/12">
            <h4 className="text-md font-bold">{category}</h4>
          </div>
          <button
          className="flex w-8 h-8 rounded-full bg-red-600 hover:bg-red-800 items-center justify-center text-white"
           type="button" onClick={onClick}>
          <ChevronRight />
          </button>
        </div>
      </div>
    );
  };
  
  export default CategoryCard;