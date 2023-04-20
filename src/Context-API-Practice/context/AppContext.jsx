import { createContext, useContext, useState } from "react"

// invoke createContext hook
const AppContext = createContext()

// Custom hook
export const useShareContext = () => useContext(AppContext)

export const AppContextApi = (props) => {
    const [name, setName] = useState('bob')
    
    return (
        <AppContext.Provider value={{name,setName}}>
            {props.children}
        </AppContext.Provider>
    )
}