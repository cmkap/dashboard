import React,{ useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Bookings, TicketSales, Calendar, Participants, StartList, Kanban, Area, Bar, Line, Pie, Financial, ColorMapping} from './pages'

import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
    const { activeMenu } = useStateContext();
    

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
                            <Route path="/" element={<Bookings />} />
                            <Route path="/bookings" element={<Bookings />} />

                            {/* Pages */}
                            <Route path="/participants" element={<Participants />}/>
                            <Route path="/ticketSales" element={<TicketSales />}/>
                            <Route path="/startList" element={<StartList />}/>

                            {/* Apps */}
                            <Route path="/kanban" element={<Kanban />}/>
                            <Route path="/calender" element={<Calendar />}/>

                            {/* Charts */}
                            <Route path="/line" element={<Line />}/>
                            <Route path="/area" element={<Area />}/>
                            <Route path="/bar" element={<Bar />}/>
                            <Route path="/pie" element={<Pie />}/>
                            <Route path="/financial" element={<Financial />}/>


                        </Routes>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

// rafce
//hover light grey

// border radius 50% to make it to a circle

//theme written in inline style ?? for further funtionality instead of class name look up positives and negatives

//side bar true then show side bar
// w-72-- width of 18 rem and fixed in positioning-- size of the side bar -- sidebar is the class name
/// sidebar backround white
// w-0 width of zero