import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./components";
import {
  Home,
  DetailBook,
  Profile,
  AddBook,
  Cart,
  IncomeTransaction,
  EditProfile,
  ListBookAdmin,
  UpdateBook,
} from "./pages";
import "./App.css";
import { API, setAuthToken } from "./config/api";
import { useQuery } from "react-query";
import { UserContext } from "./components/context/UserContext";
import { Outlet, Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(true);

  const [state, dispatch] = React.useContext(UserContext);

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false && !isLoading) {
      navigate("/");
    }
  }, [state]);

  const checkUser = async () => {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data;

      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    checkUser();
  }, []);

  const PrivateRoute = () => {
    return state.user.role === "user" ? <Outlet /> : <Navigate to="/" />;
  };

  const AdminRoute = () => {
    return state.user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div className="bg">
      {isLoading ? (
        <></>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/detail-book/:id" element={<DetailBook />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="/" element={<AdminRoute />}>
                <Route path="/add-book" element={<AddBook />} />
                <Route
                  path="/income-transaction"
                  element={<IncomeTransaction />}
                />
                <Route path="/list-book" element={<ListBookAdmin />} />
                <Route path="/update-book/:id" element={<UpdateBook />} />
              </Route>
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
