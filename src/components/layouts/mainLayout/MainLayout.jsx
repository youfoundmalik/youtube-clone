import { Stack } from "@mui/material"

import Header from "../../header/Header"

const MainLayout = (props) => {
  return (
    <Stack>
    <Header/>
    {props.children}
    </Stack>
  )
}

export default MainLayout