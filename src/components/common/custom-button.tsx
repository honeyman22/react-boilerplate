import React from "react";
interface CustomButtonProps {
  color: string;
  text: string;
  func: any;
}
const CustomButton = ({ color, text, func }: CustomButtonProps) => {
  return (
    <button
      type="submit"
      className={`w-full h-10 flex items-center rounded-[4px] justify-center ${color} text-white  `}
      onClick={func}
    >
      {text}
    </button>
  );
};

export default CustomButton;
