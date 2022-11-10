import * as React from "react";
import { styles } from "../style";
import { Logo, Profile1, Carticonnav, Logouticon, Usericon } from "../assets";
import GlobalButton from "./atoms/button/GlobalButton";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

const Navbar = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [dropdownOpen, setdropdownOpen] = React.useState(false);
  const [showModalLogin, setShowModalLogin] = React.useState(false);
  const [showModalRegister, setShowModalRegister] = React.useState(false);

  const drowDownClick = () => {
    setdropdownOpen((current) => !current);
  };

  return (
    <div className={styles.boxWidth}>
      <div className={`${styles.paddingX} ${styles.padding}`}>
        <div className={styles.flexBetween}>
          <Link to="/">
            <img src={Logo} alt="waysbooks" className="w-[111px] h-[65px]" />
          </Link>
          {!isLogin ? (
            <div>
              <GlobalButton
                title="Login"
                onClick={() => setShowModalLogin(true)}
                bg="bg-transparent"
                fc="text-primary"
                custom="w-[100px] h-[30px] border border-primary border-[2px] mr-[15px]"
              />
              <GlobalButton
                title="Register"
                onClick={() => setShowModalRegister(true)}
                custom="w-[100px] h-[30px]"
              />
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/cart">
                <img
                  src={Carticonnav}
                  alt=""
                  className="w-[35px] h-[32px] mr-[40px]"
                />
                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full absolute top-14 right-48">
                  0
                </span>
              </Link>
              <img
                src={Profile1}
                alt=""
                className="w-[60px] h-[60px] rounded-full"
                onClick={() => {
                  drowDownClick();
                }}
              />
              <div>
                <ul
                  className={`${
                    dropdownOpen ? "" : "hidden"
                  } absolute bg-white p-5 rounded-lg shadow-lg lg:right-10 lg:top-28 right-0 top-[85px] border-2`}
                >
                  <Link
                    to="/profile"
                    onClick={() => {
                      setdropdownOpen(false);
                    }}
                  >
                    <li className="flex items-center px-2 mb-4 border-b-2 pb-4">
                      <img src={Usericon} alt="iconperson" className="pr-4" />
                      <span>Profile</span>
                    </li>
                  </Link>
                  <li className="flex items-center px-2 mt-4 pr-12 cursor-pointer">
                    <img src={Logouticon} alt="IconLogout" className="pr-4" />
                    <span onClick={() => setIsLogin(false)}>Logout</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <Login
        showModalLogin={showModalLogin}
        setShowModalLogin={setShowModalLogin}
        setShowModalRegister={setShowModalRegister}
        setIsLogin={setIsLogin}
      />
      <Register
        showModalRegister={showModalRegister}
        setShowModalRegister={setShowModalRegister}
        setShowModalLogin={setShowModalLogin}
      />
    </div>
  );
};

export default Navbar;
