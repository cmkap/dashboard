import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Bookings() {
  
  const [participant, setParticipant] =useState([]);
  const [activeDiv, setActiveDiv] = useState(true)

  useEffect(() => {

    const fetchParticipants = async() => {
      const response = await Axios.get('https://ldt-tech-test.herokuapp.com/api/startlistentries')
    
      setParticipant(response.data)
    }
    fetchParticipants()
  },[])

  
  const confirmedTicket = participant.reduce((total, item) => {
    if (item.status === "CONFIRMED") {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);
  
  const pendingTicket = participant.reduce((total, item) => {
    if (item.status === "PENDING") {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);


  const refundedTicket = participant.reduce((total, item) => {
    if (item.status === "REFUNDED") {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);

  const organiserFunction = ( id ) => {
    return participant.reduce((total, item) => {
            if (item.organiserId === id) {
              total += item.ticketPrice.value;
            }
            return total;
          }, 0);
    
  }

const buttonFunction = () => {
  setActiveDiv(!activeDiv)
}


  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Ticket Sales</p>
              <p className='font-bold text-1xl text-gray-800'>Confirmed Ticket Sales £{ confirmedTicket } </p>
              <p className='text-1xl text-blue-800'>Pending Tickets Sales: £{ pendingTicket } </p>
              <p className='text-1xl text-red-400'>Refunded Tickets Sales: £{ refundedTicket }</p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center bg-white' text-gray-400>
        <div>
        <h1>Great Run Confirmed Tickets Sales: £{organiserFunction(26391)}</h1>
      {activeDiv && (<>
        <h1>Limelight Sports Club Confirmed Tickets Sales: £{organiserFunction(154979)}</h1>
        <h1>Run Through Confirmed Tickets Sales: £{organiserFunction(69173)}</h1>
        </> )}
      </div>
        
      </div>
      <div>
          <button
          onClick={buttonFunction}
          >
          Hide
          </button>
      </div>

      
    </div>
  )
}

export default Bookings