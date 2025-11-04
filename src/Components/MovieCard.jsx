import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { IoIosStarHalf } from 'react-icons/io';

const MovieCard = ({movies}) => {
  return (
    <div className='font-mon transition-transform duration-300 hover:scale-105'>
        <img src={movies.card_picture} alt={movies.title}
        className='h-60 mx-auto object-contain rounded-lg'
        />

        <div className='p-4 space-y-2'>
            <div className='flex justify-between '>
                <h3>{movies.title}</h3>
                <div className='flex items-center gap-2'>
                    <FaEye className='text-gray-500 '/>
                    <FaHeartCircleCheck className='text-rose-700'/>
                </div>
            </div>
        </div>
        <p className='text-sm text-gray-400 px-4'>{movies.released_date}</p>
        <div className='flex justify-between px-4'>
            <p className='text-sm text-black font-extrabold bg-yellow-400 rounded px-2'>{movies.platform}</p>

            <p className='flex text-sm text-gray-400 justify-center items-center gap-2'>
                <IoIosStarHalf className='text-yellow-400'/>
                {movies.rating}
            </p>
        </div>
    </div>
  );
};

export default MovieCard;
