import React from "react";
import Book from "../assets/img/book1.png";
import { styles } from "../style";
import GlobalButton from "./atoms/GlobalButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import convertRupiah from "rupiah-format";

const PopularBooks = () => {
  const books = [
    {
      id: 1,
      title: "Sebuah Seni Untuk Bersikap Bodo Amat",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...",
      price: "100000",
    },
    {
      id: 2,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Dua insan manusia harus terjebak dalam dilema cinta yang memaksa salah satu dari mereka pergi me ...",
      price: "100000",
    },
    {
      id: 3,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...",
      price: "100000",
    },
    {
      id: 4,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...",
      price: "100000",
    },
  ];

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
        {books.map((item, id) => {
          return (
            <div key={id}>
              <SwiperSlide>
                <div className="flex items-center w-[500px]">
                  <img
                    src={item.image}
                    alt="books"
                    className="w-[236px] h-[345px]"
                  />
                  <div className="flex flex-col justify-between px-4 py-3 h-[277px] bg-white">
                    <h1 className="font-bold text-[28px] leading-none">
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

export default PopularBooks;
