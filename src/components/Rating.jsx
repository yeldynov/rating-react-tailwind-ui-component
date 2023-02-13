import React, { useState } from 'react';
import StarIcon from '/src/assets/icon-star.svg';

function Rating({ setSubmitted, setRating, rating }) {
  const chosenStyles = `bg-medium-gray text-white`;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className='w-11/12 mobile:w-1/4 bg-medium-dark-blue p-8 flex flex-col rounded-3xl gap-5 '>
      <div className='relative w-12 h-12'>
        <img
          className='flex p-3 items-center justify-center rounded-full bg-gray-800'
          src={StarIcon}
          alt='start icon'
        />
      </div>
      <h1 className='text-3xl font-bold text-white'>How did we do?</h1>
      <p className='text-light-gray'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='flex justify-between'>
        {[...Array(5)].map((rate, index) => {
          index += 1;
          return (
            <button
              type='button'
              key={index}
              className={` ${
                rating === index ? chosenStyles : 'bg-gray-800 text-light-gray'
              } rounded-full h-10 w-10 mobile:h-[3.25rem] mobile:w-[3.25rem] flex items-center justify-center hover:text-white font-bold cursor-pointer transition duration-200 hover:bg-orange`}
              onClick={() => setRating(index)}
            >
              {index}
            </button>
          );
        })}
      </div>
      <button
        type='submit'
        className=' bg-orange hover:bg-white text-white hover:text-orange transition duration-200 p-3 rounded-3xl font-bold tracking-widest'
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default Rating;
