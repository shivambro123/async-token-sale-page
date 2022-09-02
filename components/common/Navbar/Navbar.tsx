import FC from "react";
import s from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={`${s.container}`}>
        <div className={`${s.main}`}>
          <ul>
            <li>
              <Link href={"#"}>
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a>whitepaper</a>
              </Link>
            </li>

            <li>
              <Link href={"#"}>
                <a>about</a>
              </Link>
            </li>

            <li>
              <Image
                className={s.logowrapper}
                src="/images/async_logo.png"
                alt="logo"
                width={97}
                height={54}
              />
            </li>
            <li>
              <Link href={"#"}>
                <a>contact us</a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a>get $async</a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a>open app</a>
              </Link>
            </li>
            {/* <li><button className={s.btn}>connect wallet</button></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
