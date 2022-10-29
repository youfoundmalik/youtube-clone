import './index.scss'
import { Stack, Box } from "@mui/material";

const SidebarLayout = (props) => {
  return (
    <Stack direction="row" className="sidebar-layout">
      <Box className="sidebar">{props.sidebar}</Box>
      <Box className="main">{props.children}</Box>
    </Stack>
  );
};

export default SidebarLayout;
