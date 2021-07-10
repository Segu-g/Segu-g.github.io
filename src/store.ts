import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from "history"
import createStore from './rootReducer'

export const history = createBrowserHistory();

const params = (new URL(location.href)).searchParams.get("p");
console.log(params);
if (params) {
    history.push(params);
}

const store = createStore(history);

export type AppDispatch = typeof store.dispatch

export default store