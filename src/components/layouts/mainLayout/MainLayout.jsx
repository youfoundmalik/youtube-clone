import { Stack } from "@mui/material";

import Header from "../../header/Header";

const MainLayout = (props) => {
  return (
    <Stack>
      <Header
        setIsCollapsed={props.setIsCollapsed}
        isCollapsed={props.isCollapsed}
      />
      {props.children}
    </Stack>
  );
};

export default MainLayout;
