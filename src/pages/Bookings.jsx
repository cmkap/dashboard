import React from 'react'

function Bookings({participants}) {
  
 

  
  const confirmedTicket = participants.reduce((total, item) => {
    if (item.status === "CONFIRMED") {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);
  
  const pendingTicket = participants.reduce((total, item) => {
    if (item.status === "PENDING") {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);


  const refundedTicket = participants.reduce((total, item) => {
    if (item.status === "REFUNDED") {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);
 
  const greatRunSales = participants.reduce((total, item) => {
    if (item.organiserId === 26391) {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);
  
  const sportsClubSales = participants.reduce((total, item) => {
    if (item.organiserId === 154979) {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);


  const runThroughSales = participants.reduce((total, item) => {
    if (item.organiserId === 69173) {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center pt-4'>
            <div>
              <p className='font-bold text-gray-400'>Ticket Sales</p>
              <p className='font-bold text-1xl text-gray-800'>Confirmed Ticket Sales £{ confirmedTicket } </p>
              <p className='text-1xl text-blue-800'>Pending Tickets Sales: £{ pendingTicket } </p>
              <p className='text-1xl text-red-400'>Refunded Tickets Sales: £{ refundedTicket }</p>
            </div>
          </div>
          
          <div className='p-3'>
            <h1>Great Run Confirmed Tickets Sales: £{greatRunSales}</h1>
            <h1>Limelight Sports Club Confirmed Tickets Sales: £{sportsClubSales}</h1>
            <h1>Run Through Confirmed Tickets Sales: £{runThroughSales}</h1>
          </div>
        </div>
      </div>
     
      
    </div>
  )
}

export default Bookings