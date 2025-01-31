import React from "react";
const Login = () => {
  return (
    <>
      <div>
        <div>
          <h1>Մուտք</h1>
        </div>
        <div>
          <input type="email" placeholder="Էլ․ հասցե կամ հեռախոսահամար" />
          <input type="password" placeholder="Գաղտնաբառ" />
        </div>
        <div>
          <p>Մոռացել եք գաղտնաբա՞ռը</p>
          <button>Մուտք</button>
        </div>
        <div>
          <button>Մուտք Google-ի միջոցով</button>
          <p>Դեռ գրանցված չե՞ք։ Գրանցում</p>
        </div>
      </div>
    </>
  );
};

export default Login;
