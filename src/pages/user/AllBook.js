import React from "react";
import { styles } from "../../style";
import Book from "../../assets/img/book1.png";
import convertRupiah from "rupiah-format";
import { GlobalButton } from "../../components";
const AllBook = () => {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
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
    {
      id: 5,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...",
      price: "100000",
    },
    {
      id: 5,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...",
      price: "100000",
    },
    {
      id: 5,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...",
      price: "100000",
    },
    {
      id: 5,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      description:
        "Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...",
      price: "100000",
    },
  ];
  return (
    <div className="px-[200px]">
      <h1 className={`${styles.heading3} mt-20 mb-16`}>All Book</h1>
      <div className="grid grid-cols-4">
        {books.map((book) => (
          <div className="w-[200px] mb-10 h-[450px] flex flex-col justify-between">
            <img src={book.image} alt="" className="w-full h-[270px]" />
            <h1 className="text-[24px] font-bold">{book.title}</h1>
            <p className="text-[14px] text-slate-400 italic">
              By. {book.author}
            </p>
            <p className="text-[18px] text-green-600 font-bold">
              {convertRupiah.convert(book.price)}
            </p>
            <GlobalButton title="Add to cart" custom="w-full h-[40px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
