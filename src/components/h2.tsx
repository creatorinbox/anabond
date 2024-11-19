"use client";
interface H2Props {
    text: string;
  }

const H2: React.FC<H2Props> = ({ text }) => {
  return (
    <h2 className="uppercase text-center font-bold text-lg md:text-xl">{ text }</h2>
  )
}

export default H2