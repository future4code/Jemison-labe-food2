import React from "react";
import { GlobalContext } from "./GlobalContext"

export function GlobalState(props){




    const Provider = GlobalContext.Provider
    return (
        <Provider>
            {props.children}
        </Provider>
    )
}