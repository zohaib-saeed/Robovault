import React from "react";

const Button = ({
  text,
  textSize,
  fontWeight,
  color,
  bgColor,
  capitalize,
  px,
  py,
}) => {
  return (
    <button
      className={`${textSize ? textSize : "text-xl"} ${
        color ? color : "text-white"
      } ${fontWeight ? fontWeight : "font-semibold"} ${
        capitalize && "capitalize"
      } ${px ? px : "px-8"} ${py ? py : "py-2"} ${
        bgColor ? bgColor : "bg-lightGreen"
      } rounded hover:bg-opacity-80 transition-all m-0`}
    >
      {text}
    </button>
  );
};

export default Button;
