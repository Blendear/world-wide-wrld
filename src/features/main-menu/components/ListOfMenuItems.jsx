//
//       _._. Links - to subpages (Player & GM are seing them)
//
//       _._. Links - to subpages (GM sees them)
//

import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";

const ListOfMenuItems = () => {
  let isOpen = true; //hook1 - get it from redux, right?
  // /\ false for now, because styles file dont exist, so the button spans through the whole screen, blocking any other clicks

  return (
    isOpen && (
      <ul className={styles["list__container"]}>
        {/* 
    //       _._. Links - to subpages (Player & GM are seing them)
    */}
        <MenuItem
          urlPath="/meet-info" // hook1 - shouldnt i add a slug for getting "which playr is logged" or redux is a more professional way?
          imagePath="menu-item-menu-info"
          altText="meet-info"
        />
        <MenuItem
          urlPath="/equipment"
          imagePath="menu-item-equipment"
          altText="equipment"
        />
        <MenuItem
          urlPath="/questlines"
          imagePath="menu-item-questlines"
          altText="questlines"
        />
        <MenuItem
          urlPath="/skilltree"
          imagePath="menu-item-skilltree"
          altText="skilltree"
        />
        {/* 
    //       _._. Links - to subpages (GM sees them)
    */}
      </ul>
    )
  );
};
export default ListOfMenuItems;
