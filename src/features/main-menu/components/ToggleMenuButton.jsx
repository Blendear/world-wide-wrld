//
//       _._. Button - shows / hides the menu
//

import styles from "src/styles/sass/styles-all.module.scss";

const ToggleMenuButton = () => {
  //
  //       _._. Button - shows / hides the menu
  //

  let isOpen = true; //hook1 - get it from redux, right?

  return isOpen && <button className={styles["btn-menu"]}> open </button>;
};
export default ToggleMenuButton;
