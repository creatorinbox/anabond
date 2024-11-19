"client use";

import React, { Component, ReactNode } from "react";

interface IconBoxProps {
    title: string;
    text?: string;
    imgURI: string;
  }

const IconBox: React.FC<IconBoxProps> = ({title, text, imgURI}) => {
  return (
    <div className="flex items-center gap-3 bg-white p-5 md:p-5  rounded-xl shadow-md">
        <img className="w-10" src={imgURI} alt={title} />
        <div className="grid">
        <h4 className="text-md font-bold">{title}</h4>
        <p className="text-xs">{text}</p>
        </div>
    </div>
  )
}

export default IconBox