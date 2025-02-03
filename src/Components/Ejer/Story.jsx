import React from 'react'

const Story = () => {
    return (
        <div className="mt-[80px] flex flex-wrap justify-center items-center space-x-[20px]">
            <img 
                src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout-background-pc.jpg&w=1920&q=75" 
                className="w-[35vw] h-[50vh] rounded-[20px] sm:w-[60vw] sm:h-[40vh] md:w-[45vw] md:h-[50vh]"
                alt="Story Image"
            />
            <strong className="text-[30px] ml-[40px] sm:text-[24px] md:text-[28px] text-center sm:text-left">
                Մեր պատմությունը  
                <p className="text-[16px] sm:text-[14px] md:text-[15px] mt-[10px]">
                    Amaranoc.am - ը հիմնադրվել է 2023 թվականի հուլիսի 1-ին և հենց այդ<br />
                    օրվանից սկսած մինչ օրս մենք չենք դադարում զարմացնել մեր <br />
                    հաճախորդներին և գոհացնել մեր գործընկերներին; Մենք հպարտ<br />
                    ենք, որ այս նախագիծը մեր ողջ թիմի համատեղ ջանքերի արդյունքն <br />
                    է և հանդիսանում է Hasce.am անշարժ գույքի ընկերության <br />
                    ամենակարևոր մաս: Յուրաքանչյուր քայլ ամրապնդել է մեր<br />
                    հիմնադիր սկզբունքները և առաջ է մղել մեզ ձեռք բերել անուն, որին <br />
                    վստահում են բոլորը. Եվ եթե դուք այստեղ եք, հավատացած եղեք, որ <br />
                    ամեն ինչ դեռ առջևում է.
                </p>
            </strong>
        </div>
    )
}

export default Story
