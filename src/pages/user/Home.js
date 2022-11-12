import React, { useContext } from "react";
import { Hero, PopularBooks, ListBook } from "../../components";
import { UserContext } from "../../components/context/UserContext";
import IncomeTransaction from "../admin/IncomeTransaction";

const Home = () => {
  const [state, dispacth] = useContext(UserContext);

  const data = state.data;

  return (
    <>
      {state.user.role === "admin" ? (
        <IncomeTransaction />
      ) : (
        <>
          <Hero />
          <PopularBooks />
          <ListBook />
        </>
      )}
    </>
  );
};

export default Home;
