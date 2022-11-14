import React, { useContext } from "react";
import { styles } from "../../style";
import Book2 from "../../assets/img/book-detail.png";
import { Carticon } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import convertRupiah from "rupiah-format";
import { UserContext } from "../../components/context/UserContext";

const DetailBook = () => {
  const params = useParams();

  const [state] = useContext(UserContext);

  const navigate = useNavigate();

  let { data: book } = useQuery("detailBookCache", async () => {
    const response = await API.get(`/book/${params.id}`);
    return response.data.data;
  });

  const addToCart = async (id) => {
    try {
      const response = await API.post(`/cart/add/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[262px] mt-10">
      <div className="grid grid-cols-2 gap-10 w-full">
        <div className="w-full ">
          <img src={book?.thumbnail} alt="" className="w-full h-[577px]" />
        </div>
        <div className="w-full flex flex-col justify-between">
          <h1 className="text-[48px] font-bold font-timesroman">
            {book?.title}
          </h1>
          <p className="text-[24px] italic text-slate-500">By {book?.author}</p>
          <h2 className={styles.heading2}>Publication date</h2>
          <p className={styles.heading4}>{book?.publication_date}</p>
          <h2 className={styles.heading2}>Pages</h2>
          <p className={styles.heading4}>{book?.pages}</p>
          <h2 className={`${styles.heading2} text-red-500`}>ISBN</h2>
          <p className={styles.heading4}>{book?.isbn}</p>
          <h2 className={styles.heading2}>Price</h2>
          <p className={`${styles.heading4} text-green-500`}>
            {convertRupiah.convert(book?.price)}
          </p>
        </div>
      </div>
      <div className="mt-[80px]">
        <h1 className={`${styles.heading3} mb-10`}>About This Book</h1>
        <p className="text-justify text-slate-400 font-avanir">
          {book?.description}
        </p>
        {state.user.role === "admin" ? (
          <div className="my-[30px]">.</div>
        ) : (
          <button
            onClick={() => addToCart(book.id)}
            className="w-[144px] h-[50px] float-right my-[30px] font-avanir bg-primary text-white rounded font-bold flex items-center justify-center"
          >
            <span className="pr-2">Add Cart</span>
            <img src={Carticon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailBook;
