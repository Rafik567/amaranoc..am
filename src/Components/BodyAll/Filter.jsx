import React from "react";
import "../BodyAll/filter.css";
const Filter = () => {
  return (
    <>
      <div className="post">
        <div className="filter-container">
          <div className="filter-group max-h-[200px] overflow-y-auto  p-2">
            <strong>Տարածաշրջան</strong>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Դիլիջան 74</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ծաղկաձոր 49</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Երևան 13</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ձորաղբյուր 13</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Արզնի 10</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ջրվեժ 10</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Աշտարակ 10</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Նոր Հաճն 8</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Աբովյան 7</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Պտղնի 6</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Սևան 6</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Քասախ 5</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Զովունի 5</span>
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <div className="flex gap-[50px]">
              <strong>Արժեք</strong>
              <div className="flex gap-[10px]">
                <img
                  src="https://www.shutterstock.com/image-vector/armenian-dram-coin-monochrome-black-600nw-1675046068.jpg"
                  className="w-[40px]"
                />
                <i
                  className="fa fa-dollar  h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px] "
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
            <div className="price-range mt-[20px]">
              <input type="number" placeholder="Սկսած" />
              <span>-</span>
              <input type="number" placeholder="Մինչև" />
            </div>
          </div>
          <hr />

          <div className="filter-group">
            <strong>Մարդկանց թույլատրելի քանակ</strong>
            <div className="flex mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">
                -
              </button>
              <input
                type="number"
                className="w-[60px] text "
                placeholder="         1"
              />
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">
                +
              </button>
            </div>
          </div>
          <div className="filter-group">
            <strong>Գիշերակացի առկայություն</strong>
            <div className="flex gap-[15px]">
              <button className="bg-gray-300 rounded-[30px] w-[110px] h-[50px]">
                Բոլորը
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[80px] h-[50px]">
                Այո
              </button>
            </div>
            <button className="bg-gray-300 rounded-[30px] w-[70px] h-[50px] mt-[10px]">
              {" "}
              Ոչ
            </button>
          </div>
          <div className="filter-group">
            <strong>Մարդկանց թույլատրելի քանակ գիշերակացով</strong>
            <div className="flex mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">
                -
              </button>
              <input
                type="number"
                className="w-[60px] text "
                placeholder="         1"
              />
              <button className="bg-gray-300 rounded-[30px] w-[40px] h-[40px]">
                +
              </button>
            </div>
          </div>
          <div className="filter-group">
            <strong>Սենյակների քանակ</strong>
            <div className="flex gap-[15px]">
              <button className="bg-gray-300 rounded-[30px] w-[110px] h-[50px]">
                Բոլորը
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px]">
                1
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px]">
                2
              </button>
            </div>
            <div className="flex gap-[15px] mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px]">
                3
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px]">
                4
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px]">
                5
              </button>
            </div>
            <button className="bg-gray-300 rounded-[30px] w-[110px] h-[50px] mt-[10px]">
              {" "}
              6 և ավելի
            </button>
          </div>
          <div className="filter-group">
            <strong>Սենյակների քանակ</strong>
            <div className="flex gap-[15px]">
              <button className="bg-gray-300 rounded-[30px] w-[110px] h-[50px]">
                Բոլորը
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px]">
                1
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px]">
                2
              </button>
            </div>
            <button className="bg-gray-300 rounded-[30px] w-[50px] h-[50px] mt-[10px]">
              3+
            </button>
          </div>
          <div className="filter-group">
            <strong>Գիշերակացի առկայություն</strong>
            <div className="flex gap-[15px]">
              <button className="bg-gray-300 rounded-[30px] w-[110px] h-[50px]">
                Բոլորը
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[80px] h-[50px]">
                Բաց
              </button>
            </div>
            <div className="flex gap-[15px] mt-[10px]">
              <button className="bg-gray-300 rounded-[30px] w-[80px] h-[50px]">
                Փակ
              </button>
              <button className="bg-gray-300 rounded-[30px] w-[110px] h-[50px]">
                Տաքացվող
              </button>
            </div>
            <button className="bg-gray-300 rounded-[30px] w-[210px] h-[50px] mt-[10px]">
              Առանց լողավազանի
            </button>
          </div>
          <div className="filter-group max-h-[200px] overflow-y-auto  p-2">
            <strong>Առավելություններ</strong>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Սպասք</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Լվացքի մեքենա</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Աման լվացող մեքենա</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Կայանատեղի</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Առանձին մուտք</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Բուխարի</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Բացօթյա տաղավար</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Փակ տաղավար</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Մանղալ</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ամառային խոհանոց</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Նվագարկիչ</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Ճոճանակ</span>
            </div>
            <div className="flex gap-[10px]">
              <input type="checkbox" />
              <span className="text-gray-400">Բար</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
