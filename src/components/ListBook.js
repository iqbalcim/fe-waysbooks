import * as React from "react";
import { styles } from "../style";
import Book from "../assets/img/book1.png";
import { convert } from "rupiah-format";
import { GlobalButton } from "../components";
import { useNavigate } from "react-router-dom";

const ListBook = () => {
  const navigate = useNavigate();

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
  ];
  return (
    <div className="bg-[#E5E5E5]">
      <div className={`pt-[60px] pb-[42px] ${styles.paddingX}`}>
        <div className={styles.flexBetween2}>
          <h1 className="text-[36px] font-bold mb-[42px] font-timesroman">
            List Book
          </h1>
          <GlobalButton
            title="See All Book"
            custom="w-[120px] h-[40px]"
            onClick={() => navigate("/all-books")}
          />
        </div>
        <div className="grid grid-cols-5">
          {books.map((book) => (
            <div className="w-[200px] ">
              <img src={book.image} alt="" className="w-full h-[270px]" />
              <h1 className="text-[24px] font-bold">{book.title}</h1>
              <p className="text-[14px] text-slate-400 italic mb-[21px]">
                By. {book.author}
              </p>
              <p className="text-[18px] text-green-600 font-bold">
                {convert(book.price)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBook;
