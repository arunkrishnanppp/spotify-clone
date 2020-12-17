import React from "react";
import "../Player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "../Components/Footer";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar></SideBar>
        <Body spotify={spotify} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Player;
