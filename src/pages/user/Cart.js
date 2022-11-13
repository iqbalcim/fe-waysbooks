import React from "react";
import { styles } from "../../style";
import Book from "../../assets/img/book1.png";
import { Trashicon, AttachTransaction } from "../../assets";
import convertRupiah from "rupiah-format";
import { GlobalButton, GlobalInput } from "../../components";
import { API } from "../../config/api";
import { useQuery } from "react-query";

const Cart = () => {
  const { data: cart, refetch } = useQuery("cartCache", async () => {
    const response = await API.get("/cart");
    return response.data.data;
  });

  const AllCartPrice = cart?.map((item) => item.price);

  const totalPrice = AllCartPrice?.reduce((a, b) => a + b, 0);

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/cart/delete/${id}`);
      console.log(response);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const AllBooks = cart?.map((item) => item.books);

  const handleCheckout = async () => {
    try {
      const body = {
        books: AllBooks,
        status: "pending",
        totalpayment: totalPrice,
      };
      const response = await API.post("/transaction", body);
      console.log(body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="px-[200px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>My Cart</h1>
      <h2 className="font-avanir mb-[10px]">Review Your Order</h2>
      <div className="grid grid-cols-5 gap-10 ">
        <div className="col-span-3 ">
          <hr className="h-[2px] bg-[#393939]" />
          <div className="h-[50vh] overflow-y-scroll">
            {cart?.map((book) => (
              <div
                key={book.id}
                className={`${styles.flexBetween2} py-[30px] `}
              >
                <div className="flex">
                  <div className="w-[130px] h-[175px]">
                    <img
                      src={book?.books.thumbnail}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`${styles.heading4} font-timesroman text-black mb-[13px]`}
                    >
                      {book?.books.title}
                    </h3>
                    <p
                      className={`italic font-avanir text-[14px] text-slate-500 mb-[30px]`}
                    >
                      By. {book?.books.author}
                    </p>
                    <p className="text-green-500 font-bold">
                      {convertRupiah.convert(book.price)}
                    </p>
                  </div>
                </div>
                <div onClick={() => handleDelete(book.id)}>
                  <img src={Trashicon} alt="" />
                </div>
              </div>
            ))}
          </div>
          <hr className="h-[2px] bg-[#393939]" />
        </div>
        <div className="col-span-2">
          <hr className="h-[2px] bg-[#393939]" />
          <div className="py-5 flex justify-between h-[13vh]">
            <div className="flex flex-col justify-between">
              <p className={`${styles.infoHeading1} font-normal`}>Subtotal</p>
              <p className={`${styles.infoHeading1} font-normal`}>Qty</p>
            </div>
            <div className="flex flex-col justify-between text-right">
              <p className={`${styles.infoHeading1}font-normal`}>
                {convertRupiah.convert(totalPrice)}
              </p>
              <p className={`${styles.infoHeading1}font-normal`}>
                {cart.length}
              </p>
            </div>
          </div>
          <hr className="h-[2px] bg-[#393939] mb-4" />
          <div className={styles.flexBetween2}>
            <p className={styles.infoHeading1}>Total</p>
            <p className={styles.infoHeading1}>
              {convertRupiah.convert(totalPrice)}
            </p>
          </div>
          <div className="mt-10 float-right w-full">
            <GlobalButton
              title="Pay Now"
              custom="w-full h-[40px] mt-5"
              onClick={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
