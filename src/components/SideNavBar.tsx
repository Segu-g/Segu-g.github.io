import React from "react";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const sideDrawerWidth = "48px";

const SideDrawer = styled("div")(({theme})=>
({
    display: "flex",
    flexDirection: "column",
    width: sideDrawerWidth,
    height: "100%",
    position: "absolute",
    backgroundColor: theme.palette.grey.A700,
    borderRightStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: theme.palette.primary.light,
    "& .MuiIconButton-root": {
        color: theme.palette.grey[400],
        "&:hover": {
            color: theme.palette.grey[50],
        }
    }
}));

const SideNavBar = () => {
    return <SideDrawer>
        <IconButton
            size="medium"
        >
            <MenuIcon />
        </IconButton>
        <IconButton
            size="medium"
        >
            <ArticleOutlinedIcon />
        </IconButton>
        <IconButton
            size="medium"
        >
            <SearchOutlinedIcon />
        </IconButton>
        <IconButton
            size="medium"
        >
            <MenuIcon />
        </IconButton>
    </SideDrawer>;
};

export default SideNavBar;
