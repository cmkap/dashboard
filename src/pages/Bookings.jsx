import React from 'react'
import {useEffect, useState} from 'react';
import Axios from 'axios';

function Bookings() {
  const [participants, setParticipants] = useState([]);

  const fetchParticipants = async() => {
    const response = await Axios.get('https://ldt-tech-test.herokuapp.com/api/startlistentries')
  
    setParticipants(response.data.map(item => item['ticketPrice'].value).reduce((total, amount) => total + amount))
  }

  useEffect(() => {
    fetchParticipants();
  },[])

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Ticket Sales</p>
              <p className='text-2xl'>
                £{ participants }
              </p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings