import React from "react";

const Typography = ({
  text,
  textSize,
  fontWeight,
  color,
  capitalize,
  hover,
}) => {
  return (
    <p
      className={`${textSize ? textSize : "text-xl"} ${
        color ? color : "text-white"
      } ${fontWeight ? fontWeight : "font-normal"} ${
        capitalize && "capitalize"
      } ${hover && "hover:text-opacity-70"} transition-all`}
    >
      {text}
    </p>
  );
};

export default Typography;
