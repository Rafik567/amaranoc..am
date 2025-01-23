import React, { useState } from "react";
import "../BodyAll/filter.css";

const Filter = () => {
  const [idBtn, setIdBtn] = useState(null);
  let clickFun = (idBtn) => {
    setIdBtn(idBtn);

  }
  return (
    <>
      <div className="post">
        <div className="filter-container">
          <div className="filter-group max-h-[200px] overflow-y-auto p-2">
            <strong>Տարածաշրջան</strong>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Դիլիջան 74</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ծաղկաձոր 49</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Երևան 13</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ձորաղբյուր 13</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Արզնի 10</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ջրվեժ 10</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Աշտարակ 10</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Նոր Հաճն 8</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Աբովյան 7</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Պտղնի 6</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Սևան 6</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Քասախ 5</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Զովունի 5</span>
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <div className="flex flex-wrap gap-[50px]">
              <strong>Արժեք</strong>
              <div className="flex gap-[10px]">
                <img
                  src="https://www.shutterstock.com/image-vector/armenian-dram-coin-monochrome-black-600nw-1675046068.jpg"
                  className="w-[40px]"
                />
                <i
                  className="fa fa-dollar h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px]"
                  style={{ fontSize: "24px" }}
                ></i>
                <i
                  className="fa fa-euro h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px]"
                  style={{ fontSize: "24px" }}
                ></i>
                <i
                  className="fa fa-ruble h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px]"
                  style={{ fontSize: "24px" }}
                ></i>
              </div>
            </div>
            <div className="price-range mt-[20px] flex flex-wrap gap-2">
              <input type="number" placeholder="Սկսած" className="w-full sm:w-[120px]" />
              <span>-</span>
              <input type="number" placeholder="Մինչև" className="w-full sm:w-[120px]" />
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Մարդկանց թույլատրելի քանակ</strong>
            <div className="flex flex-wrap gap-[10px] mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">-</button>
              <input
                type="number"
                className="w-[60px] text-center"
                placeholder="1"
              />
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">+</button>
            </div>
          </div>
          <hr />
          <div className="filter-group">
            <strong>Գիշերակացի առկայություն</strong>
            <div className="flex flex-wrap gap-[15px]">
              <button
                onClick={() => clickFun(1)}
                className={`rounded-[30px] w-[110px] h-[50px] ${idBtn === 1 ? "bg-black text-white" : "bg-gray-300 text-black"
                  }`}
              >
                Բոլորը</button>
              <button onClick={() => clickFun(2)} className={`${idBtn === 2 ? "bg-black text-white" : "bg-gray-300 text-black"
                }  rounded-[30px] w-[80px] h-[50px] `}>
                Այո
              </button>
            </div>
            <button onClick={() => clickFun(3)} className={`${idBtn === 3 ? "bg-black text-white" : "bg-gray-300 text-black"
              }  rounded-[30px] w-[70px] h-[50px] mt-[10px]`}>
              Ոչ
            </button>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Մարդկանց թույլատրելի քանակ գիշերակացով</strong>
            <div className="flex flex-wrap gap-[10px] mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">-</button>
              <input
                type="number"
                className="w-[60px] text-center"
                placeholder="1"
              />
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">+</button>
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Սենյակների քանակ</strong>
            <div className="flex flex-wrap gap-[15px]">
              <button
                onClick={() => clickFun(4)}
                className={`rounded-[30px] w-[110px] h-[50px] ${idBtn === 4 ? "bg-black text-white" : "bg-gray-300 text-black"
                  }`}
              >
                Բոլորը</button>
              <button onClick={() => clickFun(5)} className={` rounded-[30px] w-[50px] h-[50px] ${idBtn === 5 ? "bg-black text-white" : "bg-gray-300 text-black"
                } `}>1</button>
              <button onClick={() => clickFun(6)} className={` rounded-[30px] w-[50px] h-[50px] ${idBtn === 6 ? "bg-black text-white" : "bg-gray-300 text-black"
                } `}>2</button>
            </div>
            <div className="flex flex-wrap gap-[15px] mt-[10px]">
              <button onClick={() => clickFun(7)} className={` rounded-[30px] w-[50px] h-[50px] ${idBtn === 7 ? "bg-black text-white" : "bg-gray-300 text-black"
                } `}>3</button>
              <button onClick={() => clickFun(8)} className={` rounded-[30px] w-[50px] h-[50px] ${idBtn === 8 ? "bg-black text-white" : "bg-gray-300 text-black"
                } `}>4</button>
              <button onClick={() => clickFun(9)} className={` rounded-[30px] w-[50px] h-[50px] ${idBtn === 9 ? "bg-black text-white" : "bg-gray-300 text-black"
                } `}>5</button>
            </div>
            <button onClick={() => clickFun(10)} className={` rounded-[30px] w-[110px] h-[50px] mt-[10px] ${idBtn === 10 ? "bg-black text-white" : "bg-gray-300 text-black"
              } `}>
              6 և ավելի
            </button>
          </div>
          <hr />

          <div className="filter-group max-h-[200px] overflow-y-auto p-2">
            <strong>Առավելություններ</strong>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Սպասք</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Լվացքի մեքենա</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Աման լվացող մեքենա</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Կայանատեղի</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Առանձին մուտք</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Բիլիարդ</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Մանղալ</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Կինոթատրոն</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Smart հեռուստացույց</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Աման լվացող մեքենա</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Վարսահարդարիչ</span>
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Playstation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;