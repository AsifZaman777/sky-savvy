import React from 'react';

const Forecast = ({title,weather}) => {

    const {
        temp,
        icon
    } = weather;
    return (
        <div>
            <div className='flex items-center justify-start
            mt-6'>
                <p className='text-white font-medium uppercase'>
                    {title}
                </p>
            </div>
            <hr className='mt-2'/>

            <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center py-2 mt-2'>
                    <p className='text-white text-md'>2:00 PM</p>
                    <img 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="" 
                    className='w-12 my-1' />
                    <p className='font-medium'>{Math.round(temp)}</p>
            </div>
            <div className='flex flex-col items-center justify-center py-2 mt-2'>
                    <p className='text-white text-md'>3:00 PM</p>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                     alt="" className='w-12 my-1' />
                    <p className='font-medium'>{Math.round(temp)}</p>
            </div>
            <div className='flex flex-col items-center justify-center py-2 mt-2'>
                    <p className='text-white text-md'>4:00 PM</p>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                     alt=""
                    className='w-12 my-1' />
                    <p className='font-medium'>{Math.round(temp)}</p>
            </div>
            <div className='flex flex-col items-center justify-center py-2 mt-2'>
                    <p className='text-white text-md'>5:00 PM</p>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt="" 
                    className='w-12 my-1' />
                    <p className='font-medium'>{Math.round(temp)}</p>
            </div>

            <div className='flex flex-col items-center justify-center py-2 mt-2'>
                    <p className='text-white text-md'>6:00 PM</p>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt="" 
                    className='w-12 my-1' />
                    <p className='font-medium'>{Math.round(temp)}</p>
            </div>
            
            </div>
        </div>
    );
};

export default Forecast;