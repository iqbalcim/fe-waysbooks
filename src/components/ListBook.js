import * as React from "react";
import { styles } from "../style";
import Book from "../assets/img/book1.png";
import { convert } from "rupiah-format";
import { GlobalButton } from "../components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";

const ListBook = () => {
  const navigate = useNavigate();

  let { data: books } = useQuery("latestBooksCache", async () => {
    const response = await API.get("/books");
    return response.data.data;
  });

  return (
    <div className="bg-[#E5E5E5]">
      <div className={`pt-[60px] pb-[42px] ${styles.paddingX}`}>
        <div className={styles.flexBetween2}>
          <h1 className="text-[36px] font-bold mb-[42px] font-timesroman">
            List Book
          </h1>
        </div>
        <div className="grid grid-cols-5">
          {books?.map((book) => (
            <div className="w-[200px] h-full">
              <div
                className="h-[430px] flex flex-col justify-between"
                onClick={() => navigate(`/detail-book/${book.id}`)}
              >
                <img src={book.thumbnail} alt="" className="w-full h-[270px]" />
                <h1 className="text-[24px] font-bold">{book.title}</h1>
                <p className="text-[14px] text-slate-400 italic mb-[21px]">
                  By. {book.author}
                </p>
                <p className="text-[18px] text-green-600 font-bold">
                  {convert(book.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBook;
