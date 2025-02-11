import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Grancum = () => {
  return (
    <div className="mt-[100px] flex flex-col items-center px-4">
      <div className="text-center text-xl font-bold">Մուտք</div>
      <hr className="w-full max-w-[300px] mt-2" />

      <div className="mt-5 w-full max-w-[450px]">
        <input
          type="text"
          className="w-full rounded-[10px] border-2 border-gray-300 p-2"
          placeholder="Անուն Ազգանուն"
        />
      </div>

      <div className="mt-5 w-full max-w-[450px]">
        <input
          type="number"
          className="w-full rounded-[10px] border-2 border-gray-300 p-2"
          placeholder="Հեռախոսահամար"
        />
      </div>
      <div className="mt-5 w-full max-w-[450px]">
        <input
          type="email"
          className="w-full rounded-[10px] border-2 border-gray-300 p-2"
          placeholder="Էլ Հասցե"
        />
      </div>
      <div className="mt-5 w-full max-w-[450px]">
        <input
          type="password"
          className="w-full rounded-[10px] border-2 border-gray-300 p-2"
          placeholder="Գաղտնաբառ"
        />
      </div>

      <div className="w-full  text-center mt-2">
        <p className=" text-gray-600 cursor-pointer">Մոռացել եք գաղտնաբա՞ռը</p>
      </div>

      <div className="mt-5 w-full max-w-[400px]">
        <button className="w-full bg-orange-500 rounded-[30px] text-white h-[50px]">
          Մուտք
        </button>
      </div>

      <div className="mt-5 w-full max-w-[400px]">
        <button className="w-full rounded-[30px] h-[50px] border-2 border-orange-500">
          Մուտք Google-ի միջոցով
        </button>
      </div>

      <hr className="mt-5 w-full max-w-[500px]" />

      <div className="mt-5 flex items-center ">
        <p>Դեռ գրանցված չե՞ք։</p>
        <p className="text-orange-500  cursor-pointer">Գրանցում</p>
      </div>
    </div>
  );
};

export default Grancum;
