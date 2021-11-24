import React, { useState } from "react";

import Header from "@/components/Header";

import Button from "@mui/material/Button";

const Index: React.FC = () => {
    const [count, setCount] = useState(0);
    return <div>
        <Header />
        <Button onClick={()=>setCount(count + 1)}>こんにちは</Button>
        {count}
    </div>;
};
export default Index;