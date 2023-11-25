import {createContext, useState} from "react";

export const TasbiContext = createContext({
    totalTasbiCount: 0,
    setTotalTasbiCount: (value) => {
    },
})


export const TasbiProvider = ({children}) => {
    const [totalTasbiCount, setTotalTasbiCount] = useState(0)
    const value = {totalTasbiCount, setTotalTasbiCount}
    return <TasbiContext.Provider value={value}>{children}</TasbiContext.Provider>
}