import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, DetailBook, Profile, AddBook } from "./pages";
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
