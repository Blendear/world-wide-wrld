import styles from "src/styles/sass/styles-all.module.scss";
import Link from "next/link";
import Image from "next/image";
import { relative } from "path";

const MenuItem = (props) => {
  return (
    <li className={styles["list__item"]}>
      <Link href={`${props.urlPath}`}>
        <a
          style={{
            color: "blue",
            position: relative,
            height: "50px",
            width: "200px",
          }}
        >
          <Image
            src={`/images/${props.imagePath}`}
            alt={`${props.altText}`}
            height={100}
            width={200}
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>
    </li>
  );
};
export default MenuItem;
