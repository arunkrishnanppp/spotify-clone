import React from "react";
import "../Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";
const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Search for songs" type="text"></input>
      </div>
      <div className="header_right">
        <Avatar />
        <h4>{user ? user.display_name : "ArunK"}</h4>
      </div>
    </div>
  );
};

export default Header;
