import React from "react";
import Button from "./Button";

const buttonNames = [
  "ALL",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "WWE",
  "Valenties",
  "Soccer",
  "Cricket",
  "Cooking",
  "WWE",
  "Valenties",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
