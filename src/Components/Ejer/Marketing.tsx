import React from 'react';

const Marketing: React.FC = () => {
    return (
        <>

            <div className="mt-[80px] flex flex-wrap justify-center items-center space-x-[20px]">
                <strong className="text-[30px] ml-[40px] sm:text-[24px] md:text-[28px] text-center sm:text-left">
                    Մարքեթինգ
                    <p className="text-[16px] sm:text-[14px] md:text-[15px] mt-[10px]">
                        Amaranoc.am-ում մենք գիտակցում ենք մարքեթինգի առանցքային<br />
                        դերը ամառանոցների վարձակալության ոլորտում; Մեր<br />
                        ռազմավարական մարքեթինգային նախաձեռնությունները ներառում<br />
                        են էքսկլյուզիվ համագործակցություններ և շեշտադրում են մեր <br />
                        ամառանոցների եզակի առանձնահատկությունները. 10 մասնագետից<br />
                        բաղկացած մեր պրոֆեսիոնալ մարքեթինգի թիմը աշխատում է բարձր<br />
                        պատասխանատվությամբ և նվիրումով, որպեսզի դուք միշտ առաջինը <br />
                        տեղեկացված լինեք լավագույն առաջարկների մասին.
                    </p>
                </strong>

                <img
                    src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout-background-pc.jpg&w=1920&q=75"
                    className="w-[35vw] h-[50vh] ml-[50px] rounded-[20px] sm:w-[60vw] sm:h-[40vh] md:w-[45vw] md:h-[50vh]"
                    alt="Marketing Image"
                />
            </div>
        </>
    );
}

export default Marketing;
