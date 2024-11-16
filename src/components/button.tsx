"use client";
interface ButtonProps {
    text: string;
    onClick?: (e: any) => void;
  }
  
  const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center bg-red-600 hover:bg-red-800 text-white w-[150px] h-10 rounded-md drop-shadow-md"
      >
        {text}
      </button>
    );
  };
  
  export default Button;