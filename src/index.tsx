import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";

const redirectWithPrams = () => {
    const history = window.history;
    const location = new URL(window.location.href);
    const prams = location.searchParams;
    const path = prams.get("path");
    if (path != null) {
        const route = path.replace(/\.[^/.]+$/, "");
        const url = new URL(location.origin + route);
        history.pushState({}, "", url);
    }
};

class Root extends React.Component{
    constructor(props: Record<string, never>) {
        super(props);
        redirectWithPrams();
    }

    render(): React.ReactNode {
        return (<React.StrictMode>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </React.StrictMode>);
    }
    
}

console.log("Hello!");
ReactDOM.render(
    <Root />,
    document.getElementById("root")
);
