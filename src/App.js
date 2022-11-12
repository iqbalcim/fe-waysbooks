import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
  Home,
  DetailBook,
  Profile,
  AddBook,
  Cart,
  IncomeTransaction,
  EditProfile,
  AllBook,
  ListBookAdmin,
} from "./pages";
import "./App.css";
import { API, setAuthToken } from "./config/api";
import { useQuery } from "react-query";
import { UserContext } from "./components/context/UserContext";

function App() {
  const [state, dispatch] = React.useContext(UserContext);

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      let payload = response.data.data;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="bg">
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/detail-book" element={<DetailBook />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/income-transaction" element={<IncomeTransaction />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/all-books" element={<AllBook />} />
          <Route path="/list-book" element={<ListBookAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
