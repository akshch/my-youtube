import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg cursor-pointer">
      <div className="flex col-span-1">
        <img
          onClick={() => toogleMenuHandler()}
          className="h-8"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="youtube-log"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        ></input>
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-400">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Head;
