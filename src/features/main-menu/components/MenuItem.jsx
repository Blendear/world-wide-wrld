import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import Image from "next/image";
import { relative } from "path";

const MenuItem = (props) => {
  return (
    <li className={styles["list__item"]}>
      <Link href={`${props.urlPath}`}>
        <a>
          {/* \/ hook1 - replace button with image, aftwer you create the styles file, neccessary to have working image-buttons (right now they take up the whole page with widht and height) */}

          {/* <Image
            src={`/images/${props.imagePath}`}
            alt={`${props.altText}`}
            height={100}
            width={200}
            layout="fill"
            objectFit="contain"
          /> */}

          <button>{props.altText}</button>
        </a>
      </Link>
    </li>
  );
};
export default MenuItem;
