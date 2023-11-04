import React from 'react';


const CityButtons = () => {
    const cities = [
        {
            id: 1,
            title: 'Dhaka'
        },
        {
            id: 2,
            title: 'Chattagram'
        },
        {
            id: 3,
            title: 'Comilla'
        },
        {
            id: 4,
            title: 'Barishal'
        },
        {
            id: 5, // Change the duplicate id to 5
            title: 'Rangpur'
        }
    ]

    return (
        <div className='flex items-center justify-around my-6'>
        {
            cities.map((city) => (
                <button key={city.id} className='text-white text-lg font-sans px-8 py-3 hover:backdrop-blur-md'>
                    {city.title}
                </button>
            ))
        }
    </div>
    
    );
};

export default CityButtons;
