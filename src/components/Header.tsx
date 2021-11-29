import React from "react";

import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const TopBar = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "35px",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
}));

const Header = () => (<header>
    <TopBar >
        <Box component="span">
            あああ
        </Box>
    </TopBar>
</header>);

export default Header;