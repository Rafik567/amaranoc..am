import React from 'react'

const AboutMe = () => {
  return (
    <div className="mt-[80px] flex justify-center flex-wrap">
      <img 
        src='https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout-background-pc.jpg&w=1920&q=75' 
        className="w-[35vw] h-[50vh] rounded-[20px] sm:w-[60vw] sm:h-[40vh] md:w-[45vw] md:h-[50vh]"
      />
      <strong className="text-[30px] ml-[40px] sm:text-[24px] md:text-[28px]">
        Մեր մասին
        <p className='text-[16px] sm:text-[14px] md:text-[15px]'>
          Amaranoc.am-ը վստահության, հավատարմության և գերազանցության <br/>
          ձգտման պատմություն է: Հանդիսանալով ամառանոցների <br/>
          վարձակալության ոլորտում համար մեկ ընկերությունը, մենք ձեզ <br/>
          առաջարկում ենք շքեղ առանձնատների, քոթեջների, վիլլաների և <br/>
          ամառանոցների լայն ու բազմազան ընտրություն; Մեր հիմնական <br/>
          առաքելությունն է սպասարկել մեր հաճախորդներին ամենաբարձր <br/>
          մակարդակով՝ ստեղծելով հարմարավետության և շքեղության <br/>
          մթնոլորտ մեր յուրաքանչյուր առանձնատանը: Մեր նվիրվածությունը և <br/>
          մանրուքների հանդեպ ուշադրությունը երաշխավորում է հիշարժան <br/>
          հանգիստ Հայաստանի ամենահիասքանչ ամառանոցներում:
        </p>
      </strong>
    </div>
  )
}

export default AboutMe;
