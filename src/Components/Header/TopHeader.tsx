import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataBase } from "../Data/DataBase";

interface CartItem {
  name: string;
  price: string;
}

const TopHeader: React.FC = () => {
  const [search, setSearch] = useState("");
  const [foundLocation, setFoundLocation] = useState<{
    description: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
  } | null>(null);

  const handleSearch = () => {
    const location = dataBase.find((loc) =>
      loc.description.trim().toLowerCase() === search.trim().toLowerCase()
    );
    setFoundLocation(location || null);
  };

  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleBasketClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly px-4 py-3 w-full bg-white">
      <div className="flex items-center">
        <img
          src="https://amaranoc.am/images/logo.svg"
          alt="Logo"
          className="h-[40px] md:h-[50px]"
        />
      </div>

      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/" className="hover:text-blue-500">
          Գլխավոր
        </Link>
        <Link to="/discount" className="hover:text-blue-500 cursor-pointer">
          Զեղչեր
        </Link>
        <Link to="/services" className="hover:text-blue-500">
          Ծառայություններ
        </Link>
        <Link to="/about" className="hover:text-blue-500 cursor-pointer">
          Մեր մասին
        </Link>
      </div>

      <div className="flex items-center gap-6 relative">
        <i
          className="fa fa-shopping-basket text-2xl cursor-pointer"
          onClick={handleBasketClick}
        ></i>

        <i
          className="fa fa-globe text-2xl cursor-pointer"
          onClick={() => setShowLanguages((prev) => !prev)}
        ></i>
        <Link to="/login">
          <i className="fa fa-user text-2xl cursor-pointer"></i>
        </Link>

        {showLanguages && (
          <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2 w-[150px]">
            <ul className="text-black">
              <li className="cursor-pointer hover:bg-gray-200 p-1">
                🇦🇲 Հայերեն
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-1">
                🇷🇺 Русский
              </li>
              <li className="cursor-pointer hover:bg-gray-200 p-1">English</li>
            </ul>
            <button
              
              onClick={() => setShowLanguages(false)}
            >
              Փակել
            </button>
          </div>
        )}
      </div>

      <div className="hidden md:flex">
  <input
    className="w-[250px] rounded-full border-2 border-gray-300 p-2"
    type="text"
    placeholder="Որոնում..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button onClick={handleSearch}>Փնտրել</button>
</div>

{foundLocation && (
  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-bold mb-2">Արդյունքներ</h2>
    <p>{foundLocation.description}</p>


    {foundLocation.image1 && (
      <img
        src={foundLocation.image1}
        alt={foundLocation.description}
        className="mt-2 rounded-lg"
      />
    )}
    {foundLocation.image2 && (
      <img
        src={foundLocation.image2}
        alt={foundLocation.description}
        className="mt-2 rounded-lg"
      />
    )}
    {foundLocation.image3 && (
      <img
        src={foundLocation.image3}
        alt={foundLocation.description}
        className="mt-2 rounded-lg"
      />
    )}
 
  </div>
)}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Ընտրած ապրանքներ</h2>
            <div className="space-y-2">
              {cartItems.length === 0 ? (
                <p>Բասկետը դատարկ է։</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                ))
              )}
            </div>
            <button
              className="mt-4 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              Փակել
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeader;
