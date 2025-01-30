import React, { useState } from "react";

const Map = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isCalenOpen, setIsCalenOpen] = useState(false); 

  const addModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const addCalen = () => {
    setIsCalenOpen(!isCalenOpen);
  };

  return (
    <div>
      <div className="pl-[270px] flex flex-wrap gap-[20px]">
        <button
          className="w-[180px] sm:w-[150px] md:w-[180px] rounded-[40px] border-2 border-gray-300 p-[8px]"
          onClick={addModal}
        >
          Քարտեզ
        </button>
        
        <i
          className="fa fa-calendar mt-[10px] sm:mt-[5px] rounded-[20px] border-2 border-gray-300 p-[8px] mb-[5px] text-[24px] sm:text-[20px]"
          onClick={addCalen}
        ></i>
      </div>

      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content w-[350px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]  bg-white p-5 rounded-lg">
            <h2 className="ml-[85px] text-lg sm:text-sm md:text-lg">Քարտեզի մոդալը</h2>
            <button
              onClick={addModal} 
              className="mt-4 ml-[110px] rounded-[20px] bg-red-500 text-white py-2 px-4 flex justify-center items-center"
            >
              Փակել
            </button>
          </div>
        </div>
      )}

      {isCalenOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-5 rounded-lg">
            <input type="date" className="w-full sm:w-[200px] md:w-[250px] lg:w-[300px]" />
            <button
              onClick={addCalen} 
              className="mt-4 rounded-[20px] bg-red-500 text-white py-2 px-4"
            >
              Փակել
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
