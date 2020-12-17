import React from "react";
import "../sideBarOption.css";

import { Icon } from "@material-ui/core";
const SideBarOption = ({ title, Icon }) => {
  return (
    <div className="sideBarOption">
      {Icon && <Icon className="sideBarOption_logo" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOption;
