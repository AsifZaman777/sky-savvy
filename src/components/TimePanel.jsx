import React from 'react';

const TimePanel = ({ weather}) => {
  const { dt, name, country } = weather;


  const date = new Date(dt * 1000);  

  return (
    <div>
      <div className='flex flex-row items-center justify-center text-white font-light my-6 animate-bounce ml-'>
        {"Current Date: "+date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear()+" ("+date.getHours()+":"+date.getMinutes()+" AM)"}
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
         {`${name},${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimePanel;
