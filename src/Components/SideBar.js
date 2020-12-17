import React, { useEffect } from "react";
import "../SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";
const SideBar = () => {
  const [{ playlists }] = useDataLayerValue();
  console.log(playlists);
  useEffect(() => {}, []);
  return (
    <div className="sidebar">
      <img className="sidebar_img" src="sp.png" alt="apotifylogo"></img>

      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr></hr>
      {/* <SideBarOption title="Hip-Hop"></SideBarOption>
      <SideBarOption title="Malayalam" />
      <SideBarOption title="Rock" /> */}
      {playlists?.items?.map((playlist) => (
        <SideBarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;
