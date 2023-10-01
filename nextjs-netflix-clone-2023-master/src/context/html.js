'use client'

import {createContext} from "react";

export const GlobalContext = createContext(null);

export default function globalstate({Children}){
    return <GlobalContext.Provider value ={{}}>{children}</GlobalContext.Provider>;
}
