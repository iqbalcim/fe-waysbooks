import React, { useContext } from "react";
import GlobalButton from "./atoms/button/GlobalButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import convertRupiah from "rupiah-format";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "./context/UserContext";
import Login from "./auth/Login";
import Register from "./auth/Register";

const BookRoll = () => {
  const navigate = useNavigate();

  const [showModalLogin, setShowModalLogin] = React.useState(false);
  const [showModalRegister, setShowModalRegister] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [state] = useContext(UserContext);

  console.log(state);

  let { data: books } = useQuery("latestBooksCache", async () => {
    setIsLoading(true);
    const response = await API.get("/latest-books");
    setIsLoading(false);
    return response.data.data;
  });

  //add to cart
  const addToCart = async (id) => {
    try {
      const response = await API.post(`/cart/add/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-[50vh]">
          <div role="status ">
            <svg
              aria-hidden="true"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              ></path>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="gradient">
          <Swiper
            slidesPerView={3}
            spaceBetween={150}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {books?.slice(0, 5).map((item) => {
              return (
                <div key={item.id}>
                  <SwiperSlide>
                    <div className="flex items-center w-[500px]">
                      <img
                        src={item.thumbnail}
                        alt="books"
                        className="w-[236px] h-[345px]"
                      />
                      <div className="flex flex-col justify-between px-4 py-3 h-[277px] w-[260px] bg-white">
                        <h1
                          className="font-bold text-[28px] leading-none"
                          onClick={() => navigate(`/detail-book/${item.id}`)}
                        >
                          {item.title}
                        </h1>
                        <p className="italic text-slate-400">
                          By. {item.author}
                        </p>
                        <p className="text-justify text-[14px] font-avanir break-all">
                          "{item.description.slice(0, 80)}..."
                        </p>
                        <p className="font-bold text-green-500  text-[18px]">
                          {convertRupiah.convert(item.price)}
                        </p>
                        <GlobalButton
                          title="Add to cart"
                          custom="h-[39px] font-avanir"
                          onClick={
                            state.isLogin === false
                              ? () => setShowModalLogin(true)
                              : () => addToCart(item.id)
                          }
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
          <Login
            showModalLogin={showModalLogin}
            setShowModalLogin={setShowModalLogin}
            setShowModalRegister={setShowModalRegister}
          />
          <Register
            showModalRegister={showModalRegister}
            setShowModalRegister={setShowModalRegister}
            setShowModalLogin={setShowModalLogin}
          />
        </div>
      )}
    </>
  );
};

export default BookRoll;
