import React from 'react';
import NewCarCard from './NewCarCard';

const NewCars =  async() => {
    const data = await fetch("http://localhost:5000/new-cars");
    const cars = await data.json();
    return (
        <div className='my-24 max-w-7xl mx-auto'>
            <div className='text-center mb-10'>
                <h2 className='text-red-600 font-bold text-5xl mb-2'>New Cars</h2>
                <p className='text-gray-600 font-medium text-xl'>Fullfill your dram with DreamCars</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {
                    cars.map(car=> <NewCarCard key={car._id} car={car}></NewCarCard>)
                }
            </div>
        </div>
    );
};

export default NewCars;