//
// Old concept. Not I use Auth0 with "Sign In with Google", so manual login isnt needed
//

import styles from "src/styles/sass/styles-all.module.scss";

const LoginOrSignupComponent = (props) => {
  return (
    <form>
      {/* /\ hook1 - ten dodatkowy parent hmtlelement noie zrobi burdy przy stylizowaniu? */}
      <fieldset className={styles[""]}>
        <legend className={styles[""]}>{props.typeOfAction}</legend>
        <label className={styles[""]}>
          Username
          <input
            type="text"
            name={`${props.typeOfAction}-username`} // "login-login-data" for example
            placeholder="PonętnyUsername"
          />
        </label>
        <label className={styles[""]}>
          Password
          <input
            type="text"
            name={`${props.typeOfAction}-password`} // "login-password" for example
            placeholder="PrzecudneHasło123"
          />
        </label>
        {props.typeOfAction === "Signup" && (
          <label className={styles[""]}>
            Confirm password
            <input
              type="text"
              name={`${props.typeOfAction}-password`} // "login-password" for example
              placeholder="PrzecudneHasło123"
            />
          </label>
        )}
      </fieldset>
    </form>
  );
};
export default LoginOrSignupComponent;
