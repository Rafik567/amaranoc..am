import React from 'react';

const Order = () => {
  const buttonsData = [
    { value: "50,000" },
    { value: "60,000" },
    { value: "70,000" },
    { value: "80,000" },
    { value: "90,000" },
    { value: "100,000" },
  ];

  return (
    <div className="mt-12 hidden sm:block flex flex-col items-center p-4 sm:p-6 lg:p-10 space-y-6 sm:space-y-10 bg-orange-400 rounded-2xl shadow-lg w-full sm:w-[500px] md:w-[600px]">
      <div className="relative w-[236px] sm:w-[295px] h-16 sm:h-20">
        <img alt="amaranoc-logo" src="https://amaranoc.am/images/white-logo.svg" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-contain" />
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
        {buttonsData.map((button, index) => (
          <button key={index} className="border border-white rounded-full py-2 px-4 w-[80px] xs:w-[100px] sm:w-[120px] hover:bg-white/10 transition-all">
            <div className="flex justify-center items-center gap-x-1 text-white text-xs sm:text-md">
              <span className="font-anton">{button.value}</span><span className="font-montserrat font-semibold">֏</span>
            </div>
          </button>
        ))}
      </div>
      <button className="py-3 px-6 rounded-full overflow-hidden transition-colors duration-300 text-white bg-primary border border-primary hover:bg-primary-bold hover:border-primary-bold sm:px-8 sm:py-4 mt-4">
        <p className="text-white text-xs font-bold sm:text-sm">Պատվիրել</p>
      </button>
    </div>
  );
};

export default Order;
