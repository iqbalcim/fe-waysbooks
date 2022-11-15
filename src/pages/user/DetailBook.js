import React, { useContext } from "react";
import { styles } from "../../style";
import Book2 from "../../assets/img/book-detail.png";
import { Carticon } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import convertRupiah from "rupiah-format";
import { UserContext } from "../../components/context/UserContext";
import { Login, Register } from "../../components";

const DetailBook = () => {
  const params = useParams();

  const [showModalLogin, setShowModalLogin] = React.useState(false);
  const [showModalRegister, setShowModalRegister] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [state] = useContext(UserContext);

  const navigate = useNavigate();

  let { data: book } = useQuery("detailBookCache", async () => {
    setIsLoading(true);
    const response = await API.get(`/book/${params.id}`);
    setIsLoading(false);
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
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh]">
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
        <div className="px-[262px] mt-10">
          <div className="grid grid-cols-2 gap-10 w-full">
            <div className="w-full ">
              <img
                src={book?.thumbnail}
                alt=""
                className=" h-[577px] object-cover"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <h1 className="text-[48px] font-bold font-timesroman">
                {book?.title}
              </h1>
              <p className="text-[24px] italic text-slate-500">
                By {book?.author}
              </p>
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
                onClick={
                  state.isLogin === false
                    ? () => setShowModalLogin(true)
                    : () => addToCart(params.id)
                }
                className="w-[144px] h-[50px] float-right my-[30px] font-avanir bg-primary text-white rounded font-bold flex items-center justify-center"
              >
                <span className="pr-2">Add Cart</span>
                <img src={Carticon} alt="" />
              </button>
            )}
          </div>
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

export default DetailBook;
