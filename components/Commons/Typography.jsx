import React from "react";

const Typography = ({
  text,
  textSize,
  fontWeight,
  textAlign,
  color,
  capitalize,
  hover,
  gradient,
}) => {
  return (
    <p
      className={`${textSize ? textSize : "text-xl"} ${
        color ? color : "text-white"
      } ${fontWeight ? fontWeight : "font-normal"} ${
        capitalize && "capitalize"
      }  ${textAlign ? textAlign : "text-center"} ${
        hover && "hover:text-opacity-70"
      } transition-all ${gradient && "heroTextGradient"}`}
    >
      {text}
    </p>
  );
};

export default Typography;
