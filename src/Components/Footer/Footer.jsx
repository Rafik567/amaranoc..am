import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="bg-blue-900 w-full h-[400px] sm:w-[1900px]">
          <div className="flex flex-wrap justify-center pt-[40px]">
            <h1 className="text-white text-[30px] sm:text-[50px]">Կոնտակտներ</h1>
          </div>
          <div className="flex flex-wrap justify-center text-white gap-[50px] sm:gap-[100px] pt-[40px] sm:pt-[100px]">
            <p>041-611-611/044-611-611</p>
            <p>ADDRESS.AMARANOC@GMAIL.COM</p>
            <p>AMARANOC.AM</p>
            <p>AMARANOC.AM</p>
            <p>ԹՈՒՄԱՆՅԱՆ 5</p>
          </div>
          <div className="flex flex-wrap justify-center text-white text-[16px] sm:text-[20px] pt-[20px]">
            <a>Գաղտնիության քաղաքականություն</a>
          </div>
          <div>
            <img
              className="w-full h-[14vh] sm:w-[100vw] sm:h-[14vh]"
              src="https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1200&q=75"
              alt="footer-background"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
