import React from "react";
import { styles } from "../style";
import { Logo } from "../assets";
import GlobalButton from "./atoms/GlobalButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.boxWidth}>
      <div className={`${styles.paddingX} ${styles.padding}`}>
        <div className={styles.flexBetween}>
          <Link to="/">
            <img src={Logo} alt="waysbooks" className="w-[111px] h-[65px]" />
          </Link>
          <div>
            <GlobalButton
              title="Login"
              bg="bg-transparent"
              fc="text-primary"
              custom="w-[100px] h-[30px] border border-primary border-[2px] mr-[15px]"
            />
            <GlobalButton title="Register" custom="w-[100px] h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
