import React from "react";
import { Route, Switch } from "react-router";
import { push } from 'connected-react-router';
import { useDispatch } from "react-redux";

import TaskList from "./components/TaskList"
import TaskRegistor from "./components/TaskRegistor"
import LinkWrapper from "./components/LinkWrapper"


export function App() {
    const dispatch = useDispatch();
    return <Switch>
        <Route exact path="/">
            <LinkWrapper path="/home">
                <div>
                    Home
                </div>
            </LinkWrapper>
            <TaskList />
            <TaskRegistor />
        </Route>
        <Route path="/home">
            <LinkWrapper path="/">
                <div>
                    Index
                </div>
            </LinkWrapper>
            <TaskList />
            <TaskRegistor />
        </Route>
    </Switch >
}


