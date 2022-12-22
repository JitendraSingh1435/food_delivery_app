
// inport required hooks for further use -----------------
import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProviders = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);