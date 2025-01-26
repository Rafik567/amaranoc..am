import React from 'react';

const TopHeader = () => {
  return (
    <div className='flex gap-[100px] flex-wrap justify-center mt-[15px] gap-y-[20px] md:gap-y-[10px]'>
      <div className='flex justify-center gap-[50px] items-center'>
        <img
          src='https://amaranoc.am/images/logo.svg'
          alt='Logo'
          className='h-[50px] md:h-[40px]'
        />
      </div>

      <div className='flex gap-[30px] md:gap-[80px] mt-[20px] flex-wrap text-center'>
        <p className='text-lg md:text-base'>Գլխավոր</p>
        <p className='text-lg md:text-base'>Զեղչեր</p>
        <p className='text-lg md:text-base'>Ծառայություններ</p>
        <p className='text-lg md:text-base'>Մեր մասին</p>
      </div>

      <div className='flex gap-[25px] flex-wrap sm:flex-wrap md:gap-[50px] items-center mt-[10px]'>
        <i className='fa fa-globe text-2xl'></i>
        <i className='fa fa-male text-2xl'></i>
        
      <div className=' w-full ml-[50px] flex   justify-center'>
        <input
          className='w-[300px] md:w-[250px] rounded-[20px] border-2 border-gray-300 p-[8px] text-center'
          type='text'
          placeholder='Որոնում...'
        />
      </div>
      </div>
    </div>
  );
};

export default TopHeader;