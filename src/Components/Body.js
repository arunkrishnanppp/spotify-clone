import React from "react";
import "../Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify}></Header>
      <div className="body_info">
        <img
          src={discover_weekly ? discover_weekly.images[0].url : "discover.png"}
        ></img>
        <div className="body_infotext">
          <strong>PlayList</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly ? discover_weekly.description : "description"}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledWhiteIcon className="body_play" />
          <FavoriteIcon />
          <MoreHorizIcon />
        </div>
        {/* { songlist} */}

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
