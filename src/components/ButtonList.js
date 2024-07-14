import React, { useEffect, useState } from "react";
import Button from "./Button";
import { YOUTUBE_CATEGORY_LIST_API } from "../utils/constants";

const ButtonList = () => {
  const [buttonNames, setButtonNames] = useState([]);

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getCategoriesList = async () => {
    const data = await fetch(YOUTUBE_CATEGORY_LIST_API);
    const json = await data.json();
    setButtonNames(json.items);
  };
  return (
    <div className="flex">
      {buttonNames.map((button) => (
        <Button key={button.id} name={button.snippet.title} id={button.id} />
      ))}
    </div>
  );
};

export default ButtonList;
