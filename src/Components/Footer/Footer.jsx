import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="bg-blue-900 w-[1900px] h-[400px]">
          <div className="flex flex-wrap justify-center pt-[40px]">
            <h1 className="text-white text-[50px]">Կոնտակտներ</h1>
          </div>
          <div className="flex flex-wrap justify-center text-white gap-[100px] pt-[100px]">
            <p>041-611-611/044-611-611</p>
            <p>ADDRESS.AMARANOC@GMAIL.COM</p>
            <p>AMARANOC.AM</p>
            <p>AMARANOC.AM</p>
            <p>ԹՈՒՄԱՆՅԱՆ 5</p>
          </div>
          <div className="flex flex-wrap justify-center text-white text-[20px] pt-[20px]">
            <a>Գաղտնիության քաղաքականություն</a>
          </div>
          <div>
            <img
              className="w-[100vw] h-[14vh]"
              src="https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1200&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
