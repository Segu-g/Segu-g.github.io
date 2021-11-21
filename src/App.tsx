import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import _404 from "./pages/404";

const App: React.FC = () => <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="404" element={<_404 />} />
        {/* <Navigate to="/404" /> */}
    </Routes>
</BrowserRouter>;
export default App;