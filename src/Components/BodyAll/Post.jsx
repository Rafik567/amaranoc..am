import React from 'react';
import "..///../App.css" 

const Post = () => {
  return (
    <>
      <div className="photo flex justify-center flex-wrap">
        <div className="mt-[100px] bg-blue-1 shadow-lg shadow-gray-500/50 w-[90%] sm:w-[1100px] h-[300px] rounded-[10px] border-2 border-gray-300">
          <div className="flex flex-wrap justify-center">
            <h1 className="text-white text-[24px] sm:text-[30px]">Տեղադրել հայտարարություն</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <p className="text-white mt-[20px] text-[14px] sm:text-[16px]">
              Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[15px] sm:gap-[20px] mt-[70px]">
            <input
              type="text"
              className="bg-gray-9 rounded-[10px] w-[80%] sm:w-[300px] h-[50px]"
              placeholder="Անուն Ազգանուն"
            />
            <input
              type="number"
              className="rounded-[10px] w-[80%] sm:w-[300px] h-[50px]"
              placeholder="Հեռախոսահամար"
            />
            <input
              type="email"
              className="rounded-[10px] w-[80%] sm:w-[300px] h-[50px]"
              placeholder="Էլ․ Հասցե"
            />
            <button className="bg-orange-500 rounded-[30px] w-[80%] sm:w-[100px] h-[50px]">
              Ուղարկել
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
