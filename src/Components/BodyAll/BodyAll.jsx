import React from 'react'
import '../BodyAll/filter.css';
const BodyAll = () => {
    let data = [
        {
            id: 1,
            url: "https://api.amaranoc.am/home.svg",
            text: "Առանձնատներ"
        },
        {
            id: 2,
            url: "https://api.amaranoc.am/frame_house.svg",
            text: "Frame Houses"
        },
        {
            id: 3,
            url: "https://api.amaranoc.am/cabins.svg",
            text: "Տնակներ"
        },
        {
            id: 4,
            url: "https://api.amaranoc.am/close_pool.svg",
            text: "Փակ լողավազան"
        },
        {
            id: 5,
            url: "https://api.amaranoc.am/far_from_noise.svg",
            text: "Աղմուկից հեռու"
        },
        {
            id: 6,
            url: "https://api.amaranoc.am/view.svg",
            text: "Շքեղ տեսարան"
        }
    ]
    const dataBase = [

        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736346552283--0.4154739994823833image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            icon:<i class="fa fa-map-marker" style="font-size:24px"></i>,
            title: "100,000 Դ",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736346067846--0.48136685223654463image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            icon:<i class="fa fa-map-marker" style="font-size:24px"></i>,
            title: "55,000 Դ",
        },
        {
            id: 4,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736264307372--0.5923133238359417image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            icon:<i class="fa fa-map-marker" style="font-size:24px"></i>,
            title: "45,000 Դ",
        }
    ];
    let data2 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736262949713--0.5438384878532811image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            title: "65,000 Դ",
        },
        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735309341998--0.18031243054065027image.webp&w=1920&q=75",
            description: "Արզական",
            title: "60,000",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735307864481--0.8688546137086155image.webp&w=1920&q=75",
            description: "Քասախ",
            title: "120,000 Դ",
        },
    ]
    let data3 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735305286415--0.799977604430975image.webp&w=1920&q=75",
            description: "Դիլիջան",
            title: "25,000 Դ",
        },
        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735302502215--0.230355006263677image.webp&w=1920&q=75",
            description: "Վանաձոր",
            title: "30,000",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735210751295--0.852475450909614image.webp&w=1920&q=75",
            description: "Թեղենիք",
            title: "25,000 Դ",
        },
    ]
    let data4 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735139871431--0.24029398091295828image.webp&w=1920&q=75",
            description: "Դիլիջան",
            title: "50,000 Դ",
        },
        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735208216849--0.48038698225258836image.webp&w=1920&q=75",
            description: "Փարպի",
            title: "100,000 Դ",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735135057801--0.6317828904538976image.webp&w=1920&q=75",
            description: "Աբովյան",
            title: "55,000 Դ",
        },
    ]
    let data5 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1734367997011--0.42441673023022153image.webp&w=1920&q=75",
            description: "Երևան",
            title: "100,000 Դ",
        }]
        const data6 = [ 
 
            { 
                id: 2, 
                title: "90,000 Դ", 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735922464540--0.9832742505384362image.webp&w=1920&q=75", 
                description: "Ակունք", 
            }, 
            { 
                id: 3, 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1719483738178--0.17939100328131374image.webp&w=1920&q=75", 
                title: "150,000 Դ", 
                description: "Արզնի", 
            }, 
            { 
                id: 4, 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1727006467456--0.9643954207029866image.webp&w=1920&q=75", 
                title: "130,000 Դ", 
                description: "Ծաղկաձոր", 
            } 
        ]; 
        let data7 = [ 
            { 
                id: 1, 
                description: "Բջնի", 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1718982997805--0.5443030491298497image.webp&w=1920&q=75", 
                title: "90,000 Դ", 
            }, 
            { 
                id: 2, 
                description: "Պտղնի", 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733690961413--0.3657082475795794image.webp&w=1920&q=75", 
                title: "100,000 Դ", 
            }, 
            { 
                id: 3, 
                description: "Օհանավան", 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712567462741--0.9299629007114927image.webp&w=1920&q=75", 
                title: "80,000 Դ", 
            }, 
        ] 
        let data8 = [ 
            { 
                id: 1, 
                description: "Ծաղկաձոր", 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1726755455709--0.42990686786537236image.webp&w=1920&q=75", 
                title: "100,000 Դ", 
            }, 
            { 
                id: 2, 
                description: "Օհանավան", 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645306--0.9258848613459756image.webp&w=1920&q=75", 
                title: "100,000 Դ", 
            }, 
            { 
                id: 3, 
                description: "Նօր Հաճն", 
                image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712326262412--0.25440242535580326image.webp&w=1920&q=75", 
                title: "108,000 Դ", 
            }, 
        ]
    return (
        <>

            <div className='flex justify-center mt-[60px]'>
                <div className='post'>
                    <div className="filter-container">

                        <div className="filter-group max-h-[200px] overflow-y-auto  p-2">
                            <strong >Տարածաշրջան</strong>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Դիլիջան 74</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ծաղկաձոր 49</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Երևան 13</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ձորաղբյուր 13</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Արզնի 10</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ջրվեժ 10</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Աշտարակ 10</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Նոր Հաճն 8</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Աբովյան 7</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Պտղնի 6</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Սևան 6</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Քասախ 5</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Զովունի 5</span>
                            </div>

                        </div>
                        <hr />

                        <div className="filter-group">
                            <div className='flex gap-[50px]'>
                                <strong >Արժեք</strong>
                                <div className='flex gap-[10px]'>
                                    <img src='https://www.shutterstock.com/image-vector/armenian-dram-coin-monochrome-black-600nw-1675046068.jpg' className='w-[40px]' />
                                    <i className="fa fa-dollar  h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px] " style={{ fontSize: "24px" }}></i>
                                    <i className="fa fa-euro h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px]" style={{ fontSize: "24px" }}></i>
                                    <i className="fa fa-ruble h-[39px] rounded-[20px] border-2 border-gray-300 p-[8px]" style={{ fontSize: "24px" }}></i>
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
                            <strong >Մարդկանց թույլատրելի քանակ</strong>
                            <div className='flex mt-[10px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[40px] h-[40px]'>-</button>
                                <input type='number' className='w-[60px] text ' placeholder='         1' />
                                <button className='bg-gray-300 rounded-[30px] w-[40px] h-[40px]'>+</button>
                            </div>
                        </div>
                        <div className="filter-group">

                            <strong>Գիշերակացի առկայություն</strong>
                            <div className='flex gap-[15px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[110px] h-[50px]'>Բոլորը</button>
                                <button className='bg-gray-300 rounded-[30px] w-[80px] h-[50px]'>Այո</button>
                            </div>
                            <button className='bg-gray-300 rounded-[30px] w-[70px] h-[50px] mt-[10px]'> Ոչ</button>

                        </div>
                        <div className="filter-group">
                            <strong >Մարդկանց թույլատրելի քանակ գիշերակացով</strong>
                            <div className='flex mt-[10px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[40px] h-[40px]'>-</button>
                                <input type='number' className='w-[60px] text ' placeholder='         1' />
                                <button className='bg-gray-300 rounded-[30px] w-[40px] h-[40px]'>+</button>
                            </div>
                        </div>
                        <div className="filter-group">

                            <strong>Սենյակների քանակ</strong>
                            <div className='flex gap-[15px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[110px] h-[50px]'>Բոլորը</button>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>1</button>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>2</button>


                            </div>
                            <div className='flex gap-[15px] mt-[10px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>3</button>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>4</button>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>5</button>
                            </div>
                            <button className='bg-gray-300 rounded-[30px] w-[110px] h-[50px] mt-[10px]'> 6 և ավելի</button>

                        </div>
                        <div className="filter-group">

                            <strong>Սենյակների քանակ</strong>
                            <div className='flex gap-[15px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[110px] h-[50px]'>Բոլորը</button>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>1</button>
                                <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px]'>2</button>
                            </div>
                            <button className='bg-gray-300 rounded-[30px] w-[50px] h-[50px] mt-[10px]'>3+</button>

                        </div>
                        <div className="filter-group">

                            <strong>Գիշերակացի առկայություն</strong>
                            <div className='flex gap-[15px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[110px] h-[50px]'>Բոլորը</button>
                                <button className='bg-gray-300 rounded-[30px] w-[80px] h-[50px]'>Բաց</button>

                            </div>
                            <div className='flex gap-[15px] mt-[10px]'>
                                <button className='bg-gray-300 rounded-[30px] w-[80px] h-[50px]'>Փակ</button>
                                <button className='bg-gray-300 rounded-[30px] w-[110px] h-[50px]'>Տաքացվող</button>

                            </div>
                            <button className='bg-gray-300 rounded-[30px] w-[210px] h-[50px] mt-[10px]'>Առանց լողավազանի</button>

                        </div>
                        <div className="filter-group max-h-[200px] overflow-y-auto  p-2">
                            <strong >Առավելություններ</strong>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Սպասք</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Լվացքի մեքենա</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Աման լվացող մեքենա</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Կայանատեղի</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Առանձին մուտք</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Բուխարի</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Բացօթյա տաղավար</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Փակ տաղավար</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Մանղալ</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ամառային խոհանոց</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Նվագարկիչ</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Ճոճանակ</span>
                            </div>
                            <div className='flex gap-[10px]'>
                                <input type='checkbox' />
                                <span className='text-gray-400'>Բար</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <div className='ml-[50px] flex gap-[20px]'>
                        <button className=' w-[180px] rounded-[40px] border-2 border-gray-300 p-[8px]'>Քարտեզ</button>
                        <i className="fa fa-calendar mt-[10px]  rounded-[20px] border-2 border-gray-300 p-[8px] mb-[5px] " style={{ fontSize: "24px" }}></i>
                    </div>
                    <div>
                        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
                            {data.map((el) => (
                                <div key={el.id} >
                                    <img src={el.url} className="image rounded-[10px] w-[40px] " />
                                    <p className="card-description text-[black]">{el.text}</p>

                                </div>
                            ))}
                            <i className="fa fa-arrow-right h-[39px] rounded-[20px] border-2 border-gray-300 p-[6px]" style={{ fontSize: "24px" }}></i>
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <b className='ml-[49px]'>Լավագույն առաջարկներ</b>
                        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
                            {dataBase.map((el,icon) => (
                                <div key={el.id} >
                                    <img src={el.image} className="image rounded-[10px] w-[280px] h-[240px] " />
                                    
                                    <i  src={el.icon} style={{fontSize:"24px"}}></i>
                                    <p className=" text-[black]">{el.description}</p>
                                    <p className=" text-[black]">{el.title}</p>


                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
                            {data2.map((el) => (
                                <div key={el.id} >
                                    <img src={el.image} className="image rounded-[10px] w-[280px] h-[240px] " />
                                    <p className=" text-[black]">{el.description}</p>
                                    <p className=" text-[black]">{el.title}</p>


                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-[30px]'>

                        <b className='ml-[49px]'>Սովորական առաջարկներ</b>
                        <div className="flex justify-center mt-[10px]  flex-wrap  gap-[25px] ml-[40px]">
                            {data6.map((el) => (
                                <div key={el.id} >
                                    <img src={el.image} className="image rounded-[10px] w-[280px] h-[240px] " />
                                    <p className=" text-[black]">{el.description}</p>
                                    <p className=" text-[black]">{el.title}</p>


                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mt-[30px]'>
                        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
                            {data7.map((el) => (
                                <div key={el.id} >
                                    <img src={el.image} className="image rounded-[10px] w-[280px] h-[240px] " />
                                    <p className=" text-[black]">{el.description}</p>
                                    <p className=" text-[black]">{el.title}</p>


                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <div className="flex justify-center mt-[10px] flex-wrap  gap-[25px] ml-[40px]">
                            {data8.map((el) => (
                                <div key={el.id} >
                                    <img src={el.image} className="image w-[280px] rounded-[10px] h-[240px] " />
                                    <p className=" text-[black]">{el.description}</p>
                                    <p className=" text-[black]">{el.title}</p>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyAll