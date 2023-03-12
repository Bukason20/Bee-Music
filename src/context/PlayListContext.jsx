import {createContext, useState} from "react"

const PlayListContext = createContext()

export const PlayListProvider = ({children}) => {

    return <PlayListContext.Provider>
        {children}
    </PlayListContext.Provider>
}