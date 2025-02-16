import React from "react";

interface ContactDetail {
  text: string;
}

const contactDetails: ContactDetail[] = [
  { text: "📞 041-611-611 / 044-611-611" },
  { text: "📧 ADDRESS.AMARANOC@GMAIL.COM" },
  { text: "🌍 AMARANOC.AM" },
  { text: "📍 ԹՈՒՄԱՆՅԱՆ 5" },
];

const Footer: React.FC = () => {
  return (
    <div className="bg-[#101623] text-white pt-10 relative">
      <div className="text-center">
        <h1 className="text-[30px] sm:text-[50px] font-bold">Կոնտակտներ</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-10 text-center text-lg">
        {contactDetails.map((el, i) => (
          <p key={i} className="flex items-center gap-2">{el.text}</p>
        ))}
      </div>

      <div className="text-center mt-6 text-[16px] sm:text-[20px]">
        <a href="" className="hover:text-gray-400">Գաղտնիության քաղաքականություն</a>
      </div>

      <div className="mt-10">
        <img
          className="w-full object-cover"
          src="https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1200&q=75"
          alt="footer-background"
        />
      </div>
    </div>
  );
};

export default Footer;
