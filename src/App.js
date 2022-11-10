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
} from "./pages";
import "./App.css";

function App() {
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
