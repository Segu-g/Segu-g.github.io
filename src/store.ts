import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from "history"
import createStore from './rootReducer'

export const history = createBrowserHistory();
const store = createStore(history);

export type AppDispatch = typeof store.dispatch

export default store