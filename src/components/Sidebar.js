import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow w-46">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
