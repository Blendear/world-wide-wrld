//
//~~ _. Login / Signup (Form)
//
//       _._. Toggle "I'm logging in / signing up" (Butons)
//
//       _._. Manual login/signup (Input fields & Button)
//
//       _._. Auth0 through Google etc. login/signup (???)
//

import styles from "src/styles/sass/styles-all.module.scss";
import { LoginOrSignupComponent } from "../features/authentication";
import { useState } from "react";
import SetActionTypeButton from "../features/authentication/components/SetActionTypeButton";

//
//~~ _. Login / Signup (Form)
//
const LoginPage = () => {
  const [isLoginOrSignup, setIsLoginOrSignup] = useState("Login");

  return (
    //hook2 - zamienic divy na cos bardziej semantycznego?
    <div className={styles["form-authentication"]}>
      {/* 
      //       _._. Auth0 through Google etc. login/signup (???)
      */}
      <div>Sign in page</div>
      <button className={styles[""]}>Sign in with Google</button>
      {/*
      //       _._. Toggle "I'm logging in / signing up" (Butons)
      */}
      {/* <SetActionTypeButton
        currectActionType={isLoginOrSignup}
        nameOfButton="Login"
        setterFn={() => {
          setIsLoginOrSignup("Login");
        }}
      />
      <SetActionTypeButton
        currectActionType={isLoginOrSignup}
        nameOfButton="Signup"
        setterFn={() => {
          setIsLoginOrSignup("Signup");
        }}
      /> */}
      {/*
      //       _._. Manual login/signup (Input fields & Button)
      */}
      {/* <LoginOrSignupComponent typeOfAction={`${isLoginOrSignup}`} /> */}
    </div>
  );
};
export default LoginPage;
