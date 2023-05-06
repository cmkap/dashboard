import React,{useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, } from './components';
import { Bookings,  Participants} from './pages'

import { useStateContext } from './contexts/ContextProvider';



import './App.css'
import { Axios } from 'axios';

import data  from './data/data.json'

const App = () => {
    const { activeMenu } = useStateContext();
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        fetchParticipants();
      }, []);
    
      const fetchParticipants = async () => {
        try {
            const response = await Axios.get(
              "https://ldt-tech-test.herokuapp.com/api/startlistentries"
            );
            setParticipants(response.data);
            
        } catch (error) {
            console.log(error)
            setParticipants(data)
        }
      };
    

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}> 
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button"
                        className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                        style={{ background: 'blue', borderRadius: '50%' }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                    

                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<Bookings participants={participants} />} />
                            <Route path="/bookings" element={<Bookings  participants={participants}/>} />

                            {/* Pages */}
                            <Route path="/participants" element={<Participants participants={participants} />}/>

                        </Routes>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
