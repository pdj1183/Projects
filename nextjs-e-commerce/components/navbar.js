import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Account from "./account";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        <Image
          className={styles.Image}
          src="/images/P.svg"
          width={30}
          height={30}
          alt="Logo"
        />
        <Link
          className={`${styles.nav} ${
            pathname === "/" ? `${styles.active}` : ""
          }`}
          href="/"
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          className={`${styles.nav} ${
            pathname === "/shop" ? `${styles.active}` : ""
          }`}
          href="/shop/"
        >
          {" "}
          Shop{" "}
        </Link>
        <Link
          className={`${styles.nav} ${
            pathname === "/cart" ? `${styles.active}` : ""
          }`}
          href="/cart/"
        >
          {" "}
          Cart{" "}
        </Link>
        <Account />
      </header>
    </div>
  );
}
