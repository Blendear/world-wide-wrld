//
//~~ _.  Menu - set of image-text buttons with links, whose visibility is toggled by another show/hide button
//

import styles from "src/styles/sass/styles-all.module.scss";
import { ToggleMenuButton, ListOfMenuItems } from "../../features/main-menu";

const Navbar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <ToggleMenuButton />
      <ListOfMenuItems />
    </nav>
  );
};
export default Navbar;
