import React from "react";
import Book from "../assets/img/book1.png";
import { styles } from "../style";
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

const BookRoll = () => {
  const navigate = useNavigate();

  let { data: books } = useQuery("latestBooksCache", async () => {
    const response = await API.get("/books");
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
        {books?.map((item) => {
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
                    <p className="italic text-slate-400">By. {item.author}</p>
                    <p className="text-justify text-[14px] font-avanir break-all">
                      "{item.description}"
                    </p>
                    <p className="font-bold text-green-500  text-[18px]">
                      {convertRupiah.convert(item.price)}
                    </p>
                    <GlobalButton
                      title="Add to cart"
                      custom="h-[39px] font-avanir"
                      onClick={() => addToCart(item.id)}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BookRoll;
