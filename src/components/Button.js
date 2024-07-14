import React, { useState } from "react";
import { YOUTUBE_CATEGORY_VIDEOS_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const Button = ({ name, id }) => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();

  const getCategoryVideos = async (id) => {
    setActive(id);
    const data = await fetch(
      YOUTUBE_CATEGORY_VIDEOS_API + "&videoCategoryId=" + id
    );
    const json = await data.json();
    dispatch(addVideos(json.items));
    console.log("button", json);
  };
  return (
    <div>
      <button
        className={
          "px-5 py-2 m-2 text-nowrap bg-gray-200 rounded-lg " +
          (id === active ? "bg-black text-white" : "bg-gray-200")
        }
        onClick={() => getCategoryVideos(id)}
      >
        <span className="hidden">{id}</span>
        {name}
      </button>
    </div>
  );
};

export default Button;
