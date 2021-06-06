import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch } from "react-redux";


export default function LinkWrapper(props: { path: string, children: JSX.Element }, children: JSX.Element) {
    const dispatch = useDispatch();
    return <div onClick={() => { dispatch(push(props.path)) }}>
        {props.children}
    </div>
}