import React, { useState } from "react";
import { data } from "../Data/DataBase";
import "../BodyAll/filter.css";

const Home = () => {
  let dataImg = [
    {
      id: 1,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645306--0.9258848613459756image.webp&w=1920&q=75",
      description: "Օհանավան",
      title: "100,000 Դ",
    },
    {
      id: 2,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712326262412--0.25440242535580326image.webp&w=1920&q=75",
      description: "Նոր Հաճն",
      title: "108,000 Դ",
    },
    {
      id: 3,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1727006467456--0.9643954207029866image.webp&w=1920&q=75",
      description: "Ծաղկաձոր",
      title: "108,000 Դ",
    },
    
  ];
  let dataImg2 = [
    {
      id: 1,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712567462741--0.9299629007114927image.webp&w=1920&q=75",
      description: "Օհանավան",
      title: "80,000 Դ",
    },
    {
      id: 2,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1728404685454--0.08138957718142104image.webp&w=1920&q=75",
      description: "Ծաղկաձոր",
      title: "55,000 Դ",
    }
    
  ];
  let dataImg3 = [
    {
      id: 1,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645306--0.9258848613459756image.webp&w=1920&q=75",
      description: "Օհանավան",
      title: "100,000 Դ",
    }
    
  ];
  let dataImg4 = [
    {
      id: 1,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1732618649989--0.49688815022164445image.webp&w=1920&q=75",
      description: "Ծաղկաձոր",
      title: "120,000 Դ",
    },
    {
      id: 2,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733690961413--0.3657082475795794image.webp&w=1920&q=75",
      description: "Պտղնի",
      title: "100,000 Դ",
    },
    {
      id: 3,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1737199582170--0.3679310183692286image.webp&w=1920&q=75",
      description: "Ծաղկաձոր",
      title: "150,000 Դ",
    },
    
  ];
  let dataImg5 = [
    {
      id: 1,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1726751105725--0.7220711625112image.webp&w=1920&q=75",
      description: "Ծաղկաձոր",
      title: "130,000 Դ",
    },
    {
      id: 2,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1719483738178--0.17939100328131374image.webp&w=1920&q=75",
      description: "Արզնի",
      title: "144,000 Դ",
    },
    {
      id: 3,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1737468593100--0.7540007009174476image.webp&w=1920&q=75",
      description: "Աշտարակ",
      title: "42,000 Դ",
    },
    
  ];
  let dataImg6 = [
    {
      id: 1,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1728404685454--0.08138957718142104image.webp&w=1920&q=75",
      description: "Ծաղկաձոր",
      title: "55,000 Դ",
    },
    {
      id: 2,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1726150949440--0.9147181144093686image.webp&w=1920&q=75",
      description: "Նոր Հաճն",
      title: "80,000 Դ",
    },
    {
      id: 3,
      image:
        "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1725102025406--0.6174094950158759image.webp&w=1920&q=75",
      description: "Գառնի",
      title: "100,000 Դ",
    },
    
  ];
  const [img, setImg] = useState([]); 

  const clickImg = (el) => {
    if (el.id === data[0].id) {
      setImg(dataImg);
    }else if (el.id === data[1].id) {
      setImg(dataImg2);
    }else if (el.id === data[2].id) {
      setImg(dataImg3);
    }else if (el.id === data[3].id) {
      setImg(dataImg4);
    }else if (el.id === data[4].id) {
      setImg(dataImg5);
    }else if (el.id === data[5].id) {
      setImg(dataImg6);
    }
     else {
      setImg([]);
    }
  };

  return (
    <>
      <div className="flex ml-[60px] justify-center mt-[10px] flex-wrap gap-[15px] sm:gap-[90px]">
        {data.map((el) => (
          <div
            key={el.id}
            className="flex flex-col items-center sm:w-[60px] md:w-[80px] w-[60px]"
          >
            <img
              src={el.url}
              alt={el.text}
              className="image rounded-[10px] w-[80px] h-[80px] sm:w-[100px] sm:flex-wap sm:h-[100px] md:w-[60px] md:h-[60px] cursor-pointer"
              onClick={() => clickImg(el)} 
            />
            <p className="card-description text-[black] text-center mt-[10px] sm:text-[14px] md:text-[16px]">
              {el.text}
            </p>
          </div>
        ))}
        <i
          className="fa fa-arrow-right mt-[35px] h-[39px] rounded-[20px] border-2 border-gray-300 p-[6px]"
          style={{ fontSize: "24px" }}
        ></i>
      </div>

      {img.length > 0 && (
        <div className="image-gallery mt-[20px]">
          <div className="flex justify-center flex-wrap gap-[15px]">
            {img.map((item) => (
              <div key={item.id} className="flex flex-col ">
                <img
                  src={item.image}
                  alt={item.description}
                  className="image rounded-[10px] w-[240px] h-[200px] sm:w-[280px] sm:h-[240px] md:w-[300px] md:h-[260px]"
                />
                <p className="text-[black]  mt-[10px] sm:text-[14px] md:text-[16px]">
                  {item.description}
                </p>
                <p className="text-[black]  mt-[5px] sm:text-[16px] md:text-[18px] font-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
    </>
  );
};

export default Home;
