import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import SideNavBar, {sideDrawerWidth} from "@/components/SideNavBar";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";


const theme = createTheme({});

const MainContents = styled("main")(({ theme }) => ({
    position: "absolute",
    left: sideDrawerWidth,
    right: 0,
    height: "100%",
}));


const App: React.FC = () => <BrowserRouter>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideNavBar />
        <MainContents>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainContents>
    </ThemeProvider>
</BrowserRouter>;
export default App;