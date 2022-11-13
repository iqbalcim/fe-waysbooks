import * as React from "react";
import { styles } from "../style";
import {
  Logo,
  Profile1,
  Carticonnav,
  Logouticon,
  Usericon,
  Bookiconnav,
} from "../assets";
import { RegisterAdmin } from "../pages";
import GlobalButton from "./atoms/button/GlobalButton";
import { Link, useNavigate } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { UserContext } from "./context/UserContext";
import { useQuery } from "react-query";
import { API } from "../config/api";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = React.useState(false);
  const [dropdownOpen, setdropdownOpen] = React.useState(false);
  const [showModalLogin, setShowModalLogin] = React.useState(false);
  const [showModalRegister, setShowModalRegister] = React.useState(false);

  const drowDownClick = () => {
    setdropdownOpen((current) => !current);
  };

  const [state, dispatch] = React.useContext(UserContext);

  let { data: userData, refetch } = useQuery("userDataCache", async () => {
    const response = await API.get(`/user/${localStorage.id}`);
    return response.data.data;
  });

  const { data: cartData, refetch: refetchCartData } = useQuery(
    "cartCache",
    async () => {
      try {
        const response = await API.get("/cart");
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  React.useEffect(() => {
    if (state.isLogin && state.user) {
      // getUser()
      refetch();
      refetchCartData();
    }
  }, [state]);

  return (
    <div className={styles.boxWidth}>
      <div className={`${styles.paddingX} ${styles.padding}`}>
        <div className={styles.flexBetween}>
          <Link to="/">
            <img src={Logo} alt="waysbooks" className="w-[111px] h-[65px]" />
          </Link>
          {!state.isLogin ? (
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
          ) : state.user.role === "user" ? (
            <div className="flex items-center">
              <Link to="/cart">
                <img
                  src={Carticonnav}
                  alt=""
                  className="w-[35px] h-[32px] mr-[40px]"
                />
                {cartData?.length > 0 && (
                  <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full absolute top-14 right-48">
                    {cartData?.length}
                  </span>
                )}
              </Link>
              <img
                src={userData?.image}
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
                    <span onClick={handleLogout}>Logout</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <img
                src={userData?.image}
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
                    to="/add-book"
                    onClick={() => {
                      setdropdownOpen(false);
                    }}
                  >
                    <li className="flex items-center px-2 mb-4 border-b-2 pb-4">
                      <img
                        src={Bookiconnav}
                        alt="iconperson"
                        className="pr-4"
                      />
                      <span>Add Book</span>
                    </li>
                  </Link>
                  <Link
                    to="/list-book"
                    onClick={() => {
                      setdropdownOpen(false);
                    }}
                  >
                    <li className="flex items-center px-2 mb-4 border-b-2 pb-4">
                      <img
                        src={Bookiconnav}
                        alt="iconperson"
                        className="pr-4"
                      />
                      <span>List Book</span>
                    </li>
                  </Link>
                  <li className="flex items-center px-2 mt-4 pr-12 cursor-pointer">
                    <img src={Logouticon} alt="IconLogout" className="pr-4" />
                    <span onClick={handleLogout}>Logout</span>
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
