import React, { createContext, useContext, useState, useEffect } from 'react';
import Axios from 'axios';



const StateContext = createContext();



const initialState = {
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [participants, setParticipants] = useState([]);
    const [activeMenu, setActiveMenu ] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    useEffect(() => {
        const fetchParticipants = async() => {
          const response = await Axios.get('https://ldt-tech-test.herokuapp.com/api/startlistentries')
    
          setParticipants(response.data)
        }
        fetchParticipants()
      },[])


    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }




    return (
        <StateContext.Provider
            value={{
                participants,
                setParticipants,
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