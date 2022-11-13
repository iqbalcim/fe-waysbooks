import React, { useEffect } from "react";
import { styles } from "../../style";
import Book from "../../assets/img/book1.png";
import { Trashicon, AttachTransaction } from "../../assets";
import convertRupiah from "rupiah-format";
import { GlobalButton, GlobalInput } from "../../components";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = process.env.REACT_APP_MY_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const { data: cart, refetch } = useQuery("cartCache", async () => {
    const response = await API.get("/cart");
    return response.data.data;
  });

  const AllCartPrice = cart?.map((item) => item.price);

  const totalPrice = AllCartPrice?.reduce((a, b) => a + b, 0);

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/cart/delete/${id}`);
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

      const token = response.data.data;
      console.log(token);
      window.snap.pay(token, {
        onSuccess: async function (result) {
          /* You may add your own implementation here */
          // result.order_id
          // console.log('midtrans success:', result);
          // console.log('midtrans orderId:', result.order_id);
          // console.log('midtrans fraud:', result.fraud_status);
          // console.log('midtrans status:', result.transaction_status);
          // alert('dsa');
          const body = {
            order_id: result.order_id,
            fraud_status: result.fraud_status,
            transaction_status: result.transaction_status,
          };

          const response = await API.post("/transaction-process", body);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
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
              onClick={() => handleCheckout()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
