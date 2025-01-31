import React from "react";

const contactDetails = [
  "041-611-611/044-611-611",
  "ADDRESS.AMARANOC@GMAIL.COM",
  "AMARANOC.AM",
  "AMARANOC.AM",
  "ԹՈՒՄԱՆՅԱՆ 5",
];
const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="bg-[#101623] w-full  sm:w-full">
          <div className="flex flex-wrap justify-center pt-[40px]">
            <h1 className="text-white text-[30px] sm:text-[50px]">
              Կոնտակտներ
            </h1>
          </div>
          <div className="flex flex-wrap justify-center text-white gap-[50px] sm:gap-[100px] pt-[40px] sm:pt-[100px]">
            {contactDetails.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center text-white text-[16px] sm:text-[20px] pt-[20px]">
            <a>Գաղտնիության քաղաքականություն</a>
          </div>
          <div>
            <img
              className="w-full "
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
