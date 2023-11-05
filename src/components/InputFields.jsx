import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';

const InputFields = ({setQuery}) => {
    const [city,setCity] = useState('');

    const handleSearchItem = () =>
    {
        city!==''? setQuery({q:city}):console.error("Searchbox shouldn't be null");
    }

    return (
        <div className='flex flex-row items-center ml-10'>
            <div className='bg-white  rounded-full p-2 shadow-md flex w-full'>
               
                <input
                    type="text"
                    className='bg-transparent outline-none placeholder-gray-400 w-full ml-2'
                    placeholder='Search for a city...'
                    value={city}
                    
                    onChange={(event)=>
                    {
                        setCity(event.currentTarget.value);
                    }}
                />
                 <button className='text-gray-600 hover:text-gray-800 pr-2 animate-pulse'
                onClick={handleSearchItem}>
                    <UilSearch size="18" 
                />
                </button>
            </div>
            
        </div>
    );
};

export default InputFields;
