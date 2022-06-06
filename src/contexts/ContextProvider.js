import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu ] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
//whatever value you pass here will be provided through the whole application
// returns underlying component below that content
//if key and value are the samee, just use key in an objecy