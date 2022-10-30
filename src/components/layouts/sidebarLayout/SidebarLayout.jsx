import './index.scss'
import { Stack, Box } from "@mui/material";
import Sidebar from './Sidebar';

const SidebarLayout = (props) => {
  return (
    <Stack direction="row" className="sidebar-layout">
      <Sidebar/>
      <Box className="main">{props.children}</Box>
    </Stack>
  );
};

export default SidebarLayout;
