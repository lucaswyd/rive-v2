import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { AiFillHome, AiOutlineHome, AiFillPlayCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { IoLibrary, IoLibraryOutline, IoSettings, IoSettingsOutline, IoSearchOutline, IoSearch } from "react-icons/io5";
import { PiTelevisionFill, PiTelevisionLight } from "react-icons/pi";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = ({ children }: any) => {
  const path = usePathname();
  const params = useSearchParams();
  // const query=
  const [pathname, setPathname] = useState(path);
  useEffect(() => {
    if (params.get("type") !== null) setPathname("/" + params.get("type"));
    else
      setPathname(path);
    console.log(params.get("type"));
  }, [path,params])
  return (
    <div className={styles.navbar} >
      <Link href="/">
        {pathname === "/" ? <AiFillHome className={styles.active} /> : <AiOutlineHome className={styles.inactive} />}
      </Link>
      <Link href="/search">
        {pathname === "/search" ? <IoSearch className={styles.active} /> : <IoSearchOutline className={styles.inactive} />}
      </Link>
      <Link href="/movie">
        {pathname === "/movie" ? <AiFillPlayCircle className={styles.active} /> : <AiOutlinePlayCircle className={styles.inactive} />}
      </Link>
      <Link href="/tv">
        {pathname === "/tv" ? <PiTelevisionFill className={styles.active} /> : <PiTelevisionLight className={styles.inactive} />}
      </Link>
      <Link href="/library">
        {pathname === "/library" ? <IoLibrary className={styles.active} /> : <IoLibraryOutline className={styles.inactive} />}
      </Link>
      <Link href="/settings">
        {pathname === "/settings" ? <IoSettings className={styles.active} /> : <IoSettingsOutline className={styles.inactive} />}
      </Link>
    </div>
  );
};

export default Navbar;