import React from "react";
import { styles } from "../../style";
import Book from "../../assets/img/book1.png";
import { Trashicon, AttachTransaction } from "../../assets";
import convertRupiah from "rupiah-format";
import { GlobalButton, GlobalInput } from "../../components";

const Cart = () => {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      price: "100000",
    },
    {
      id: 2,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      price: "100000",
    },
    {
      id: 3,
      title: "The Alchemist",
      image: Book,
      author: "Paulo Coelho",
      price: "100000",
    },
  ];
  return (
    <div className="px-[200px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>My Cart</h1>
      <h2 className="font-avanir mb-[10px]">Review Your Order</h2>
      <div className="grid grid-cols-5 gap-10 ">
        <div className="col-span-3 ">
          <hr className="h-[2px] bg-[#393939]" />
          <div className="h-[50vh] overflow-y-scroll">
            {books.map((book) => (
              <div className={`${styles.flexBetween2} py-[30px] `}>
                <div className="flex">
                  <div className="w-[130px] h-[175px]">
                    <img src={book.image} alt="" className="w-full" />
                  </div>
                  <div className="ml-5">
                    <h3
                      className={`${styles.heading4} font-timesroman text-black mb-[13px]`}
                    >
                      {book.title}
                    </h3>
                    <p
                      className={`italic font-avanir text-[14px] text-slate-500 mb-[30px]`}
                    >
                      By. {book.author}
                    </p>
                    <p className="text-green-500 font-bold">
                      {convertRupiah.convert(book.price)}
                    </p>
                  </div>
                </div>
                <div>
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
              <p className={`${styles.infoHeading1}font-normal`}>134.000</p>
              <p className={`${styles.infoHeading1}font-normal`}>2</p>
            </div>
          </div>
          <hr className="h-[2px] bg-[#393939] mb-4" />
          <div className={styles.flexBetween2}>
            <p className={styles.infoHeading1}>Total</p>
            <p className={styles.infoHeading1}>134.000</p>
          </div>
          <div className="mt-5 float-right">
            <label htmlFor="transaction">
              <img src={AttachTransaction} alt="" />
            </label>
            <GlobalInput id="transaction" type="file" hidden />
            <GlobalButton title="Pay" custom="w-full h-[40px] mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
