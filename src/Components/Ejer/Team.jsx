import React from 'react'

const Team = () => {
  return (
    <div className="mt-[80px] flex flex-wrap justify-center items-center space-x-[20px]">
      <strong className="text-[30px] ml-[40px] sm:text-[24px] md:text-[28px] text-center sm:text-left">
        Մեր թիմը
        <p className="text-[16px] sm:text-[14px] md:text-[15px] mt-[10px]">
          Շուրջ 20 մասնագետներից բաղկացած մեր պրոֆեսիոնալ թիմն իր<br />
          աշխատանքն իրականացնում է փայլուն հմտությամբ՝ բավարարելու <br />
          անգամ ամենաքմահաճ հաճախորդի կարիքները: Շնորհիվ ոլորտում<br />
          ունեցած մեր անգնահատելի փորձի, մեր նպատակն է անմոռանալի <br />
          պահեր ստեղծել մեր հյուրերի համար: Մենք պարզապես չենք<br />
          ստեղծում ժամանց, մենք ստեղծում ենք պատմություններ, և <br />
          յուրաքանչյուր առանձնատուն (որոնք դուք տեսնում եք մեր կայքում) <br />
          այդ պատմության մի մասն է: Օրեցօր ընդլայնվելով՝ մենք ձգտում ենք <br />
          նորագույն չափանիշներ սահմանել ոլորտում.
        </p>
      </strong>

      <img 
        src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout-background-pc.jpg&w=1920&q=75" 
        className="w-[35vw] h-[50vh] ml-[50px] rounded-[20px] sm:w-[60vw] sm:h-[40vh] md:w-[45vw] md:h-[50vh]"
        alt="Team Image"
      />
    </div>
  )
}

export default Team
