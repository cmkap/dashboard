import React from 'react'
import { BsCurrencyPound } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

import { Stacked, Pie, Button, SparkLinen} from '../components';
import { earningData, SparkLineAreaData, ecomPieChartData } from '../data/dummy'
import { letsDoThisData } from '../data/letsDoThisData';
import { useStateContext } from '../contexts/ContextProvider'

import data from '../data/data.json'

const Bookings = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Ticket Sales</p>
              <p className='text-2xl'>
                £{ data.map(item => item['ticketPrice'].value).reduce((total, amount) => total + amount) }
                </p>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {letsDoThisData.map((item)=> (
            <div
            key={item.id}
            className="bg-white 
            dark:text-gray-200 
            dark:bg-secondary-dark-bg
            md:w-56
            p-4 pt-9 rounded-2xl"
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bookings