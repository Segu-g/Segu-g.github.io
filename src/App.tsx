import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const theme = createTheme({});

const App: React.FC = () => <BrowserRouter>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </ThemeProvider>
</BrowserRouter>;
export default App;