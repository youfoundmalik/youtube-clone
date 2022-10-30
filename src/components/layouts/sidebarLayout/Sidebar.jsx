import "./index.scss";
import { Box, Stack } from "@mui/material";

import {
  sidebarExplore,
  sidebarMenu,
  sidebarMoreFrom,
} from "../../../utils/constants";
import { Fragment } from "react";

const Sidebar = () => {
  const currentPath = window.location.pathname;
  return (
    <Box className="sidebar">
      <Stack className="sidebar-inner">
        <Stack className="sidebar-container">
          {sidebarMenu.slice(0, 4).map((item, idx) => (
            <Fragment key={idx}>
              {!item.redirect && (
                <div
                  to={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </div>
              )}
              {item.redirect && (
                <a
                  href={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                  target="_blank "
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </a>
              )}
            </Fragment>
          ))}
        </Stack>
        <hr />
        <Stack className="sidebar-container">
          {sidebarMenu.slice(4).map((item, idx) => (
            <Fragment key={idx}>
              {!item.redirect && (
                <div
                  to={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </div>
              )}
              {item.redirect && (
                <a
                  href={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                  target="_blank "
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </a>
              )}
            </Fragment>
          ))}
        </Stack>
        <hr />
        <Stack className="sidebar-container">
          <h1 className="section-title">Explore</h1>
          {sidebarExplore.map((item, idx) => (
            <Fragment key={idx}>
              {!item.redirect && (
                <div
                  to={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </div>
              )}
              {item.redirect && (
                <a
                  href={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                  target="_blank "
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </a>
              )}
            </Fragment>
          ))}
        </Stack>
        <hr />
        <Stack className="sidebar-container">
          <h1 className="section-title">More From Youtube</h1>
          {sidebarMoreFrom.map((item, idx) => (
            <Fragment key={idx}>
              {!item.redirect && (
                <div
                  to={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </div>
              )}
              {item.redirect && (
                <a
                  href={item.path}
                  className={`sidebar-link ${item.disabled ? "disabled" : ""} ${
                    currentPath === item.path ? "active" : ""
                  }`}
                  target="_blank "
                >
                  {item?.icon}
                  <span>{item.name}</span>
                </a>
              )}
            </Fragment>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
