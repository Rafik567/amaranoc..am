import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const TopHeader = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-[100px] flex-wrap justify-center mt-[15px] gap-y-[20px] md:gap-y-[10px]">
      <div className="flex justify-center gap-[50px] items-center">
        <img
          src="https://amaranoc.am/images/logo.svg"
          alt="Logo"
          className="h-[50px] md:h-[40px]"
        />
      </div>

      <div className="flex gap-[30px] md:gap-[80px] mt-[20px] flex-wrap text-center">
        <p>
          Գլխավոր
        </p>

        <p className="text-lg md:text-base">Զեղչեր</p>
        <Link
          to="/services"
          className="text-lg md:text-base cursor-pointer hover:text-blue-500"
        >
          Ծառայություններ
        </Link>
        <p className="text-lg md:text-base">Մեր մասին</p>
      </div>

      <div className="flex gap-[25px] flex-wrap sm:flex-wrap md:gap-[50px] items-center mt-[10px] justify-center relative">
        <i
          className="fa fa-globe text-2xl cursor-pointer"
          onClick={() => setShowLanguages((prev) => !prev)}
        ></i>
        <i
          className="fa fa-male text-2xl cursor-pointer"></i>

        {showLanguages && (
          <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2 w-[150px]">
            <ul className="text-black">
              <li className="cursor-pointer hover:bg-gray-200 p-1">🇦🇲 Հայերեն</li>
              <li className="cursor-pointer hover:bg-gray-200 p-1">🇷🇺 Русский</li>
              <li className="cursor-pointer hover:bg-gray-200 p-1"> English</li>
            </ul>

            <button
              className="mt-2 w-full bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
              onClick={() => setShowLanguages(false)}
            >
              Փակել
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-[10px]">
        <input
          className="w-[300px] md:w-[250px] rounded-[20px] border-2 border-gray-300 p-[8px] text-center"
          type="text"
          placeholder="Որոնում..."
        />
      </div>
    </div>
  );
};

export default TopHeader;
