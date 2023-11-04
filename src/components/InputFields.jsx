import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';

const InputFields = () => {
    return (
        <div className='flex flex-row items-center ml-10'>
            <div className='bg-white rounded-full p-2 shadow-md flex w-full'>
                <button className='text-gray-600 hover:text-gray-800 pr-2'>
                    <UilSearch size="18" />
                </button>
                <input
                    type="text"
                    className='bg-transparent outline-none placeholder-gray-400 w-full'
                    placeholder='Search for a city...'
                />
            </div>
            
        </div>
    );
};

export default InputFields;
