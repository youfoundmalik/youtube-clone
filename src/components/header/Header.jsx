import "./header.scss";
import { useState } from "react";
import { Stack, IconButton, Avatar, Box, Tooltip, Badge } from "@mui/material";
import {
  MenuIcon,
  MicIcon,
  NotificationsNoneOutlinedIcon,
  SearchIcon,
} from "../../assets/icons/icons";
import { youtube } from "../../assets/images/images";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [focus, setFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Stack direction="row" className="header-container">
      <Stack direction="row" className="logo-toggle">
        {props.isCollapsed !== (null || undefined) && (
          <IconButton
            className="toggle"
            onClick={() => props.setIsCollapsed(!props.isCollapsed)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Link to="/" className="logo">
          <img src={youtube} alt="logo" className="logo-image" />
          <p className="logo-text">YouTube</p>
        </Link>
      </Stack>
      <Stack direction="row" className="search-area">
        <form className="search-bar" onSubmit={searchHandler}>
          <Stack direction="row" className="input-field">
            {focus && (
              <Box className="input-search-icon">
                <SearchIcon />
              </Box>
            )}
            <input
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={() => {
                setFocus(true);
              }}
              onBlur={() => setFocus(false)}
            />
          </Stack>
          <Tooltip title="Search">
            <button type="submit" className="search-btn">
              <SearchIcon />
            </button>
          </Tooltip>
        </form>
        <Tooltip title="Search with your voice">
          <IconButton className="speak">
            <MicIcon sx={{ color: "#000" }} />
          </IconButton>
        </Tooltip>
      </Stack>
      <Stack direction="row" className="options">
        <Badge color="error" badgeContent={9} max={9}>
          <NotificationsNoneOutlinedIcon sx={{ color: "#030303" }} />
        </Badge>
        <Avatar sx={{ width: 32, height: 32 }} className="avatar" />
      </Stack>
    </Stack>
  );
};

export default Header;
