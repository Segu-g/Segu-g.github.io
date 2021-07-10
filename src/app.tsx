import { Route, Switch, Redirect } from "react-router";
import ReactDOM from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { ConnectedRouter, push } from 'connected-react-router'
import store, { history } from "./store";

import TaskList from "./components/TaskList"
import TaskRegistor from "./components/TaskRegistor"
import LinkWrapper from "./components/LinkWrapper"


export function App() {
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
        <Route path="/404"></Route>
        <Redirect to="/404" />
    </Switch >
}



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
