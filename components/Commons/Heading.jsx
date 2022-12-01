import React from "react";

const Heading = ({
  text,
  textSize,
  fontWeight,
  color,
  capitalize,
  hover,
  textAlign,
}) => {
  return (
    <p
      className={`${textSize ? textSize : "text-6xl"} ${
        color ? color : "text-white"
      } ${fontWeight ? fontWeight : "font-bold"} ${
        capitalize && "capitalize"
      } ${textAlign ? textAlign : "text-center"} ${
        hover && "hover:text-opacity-70"
      } transition-all`}
    >
      {text}
    </p>
  );
};

export default Heading;
