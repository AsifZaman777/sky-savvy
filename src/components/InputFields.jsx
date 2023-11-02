import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';

const InputFields = () => {
    return (
        <div className='flex flex-row items-center ml-20'>
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
            <div className='ml-6 flex flex-row gap-2 ' >
                <button name='cel' className='text-white text-light px-2  text-lg backdrop-blur-md bg-white/1 hover:bg-white/10'>C</button>
                <p className='text-white text-light  text-lg  '>|</p>
                <button name='far' className='text-white text-light px-2  text-lg backdrop-blur-md bg-white/1  hover:bg-white/10'>F</button>
            </div>
        </div>
    );
};

export default InputFields;
