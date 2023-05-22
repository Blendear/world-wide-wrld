//
//
//~~ _.  Input field & Buttons - for looking up an object by string name, depending on the choosen finding method (wherever in string, wherever PO i w. PRZED stringiem),
//
//       _._. Input Field - for writing the searched string
//
//       _._. Button - for activating the search process
//
//       _._. Button - for toggling the method of searching (only one can be active)
//

import styles from "src/styles/sass/styles-all.module.scss";

const FindObjectByStringInputField = () => {
  return (
    //hook2 - semantically not correct yet
    <div className={styles["container"]}>
      <input className={styles["input-field"]}> ___ </input>
      <button className={styles["svg-search-icon"]}> ___ </button>
      <button className={styles["btn-change-search-method"]}> ___ </button>
    </div>
  );
};
export default FindObjectByStringInputField;
