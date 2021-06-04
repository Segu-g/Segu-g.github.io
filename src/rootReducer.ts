import Redux from 'redux';
import { combineReducers, createStore as reduxtkCreateStore, applyMiddleware } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { History } from "history"
import tasksModule from "./modules/tasksModule";


export default function createStore(history: History) {
    return reduxtkCreateStore(
        combineReducers({
            tasks: tasksModule.reducer,
            router: connectRouter(history),
        }),
        composeWithDevTools(applyMiddleware(routerMiddleware(history)))
    )
}


type TypeOfClassMethod<T, M extends keyof T> = T[M] extends (...args: any) => any ? T[M] : never;
export type RootState = ReturnType<TypeOfClassMethod<ReturnType<typeof createStore>, 'getState'>>
