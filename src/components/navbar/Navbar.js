import React from "react";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import BusinessIcon from "@material-ui/icons/Business";
import ComputerIcon from "@material-ui/icons/Computer";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import GavelIcon from "@material-ui/icons/Gavel";

function Navbar() {
  return (
    <nav className="Navbar">
      <HomeWorkIcon className="NavIcons" />
      <BusinessIcon className="NavIcons" />
      <ComputerIcon className="NavIcons" />
      <EmojiEventsIcon className="NavIcons" />
      <LiveTvIcon className="NavIcons" />
      <GavelIcon className="NavIcons" />
    </nav>
  );
}

export default Navbar;
