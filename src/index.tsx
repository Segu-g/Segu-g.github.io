import React from "react";
import ReactDOM from "react-dom";
import Recoil from "recoil";
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
    constructor() {
        super({});
        redirectWithPrams();
    }

    render(): React.ReactNode {
        return (<React.StrictMode>
            <Recoil.RecoilRoot>
                <App />
            </Recoil.RecoilRoot>
        </React.StrictMode>);
    }
    
}


ReactDOM.render(
    <Root />,
    document.getElementById("root")
);
