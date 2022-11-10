import React from "react";
import { styles } from "../../style";
import Book2 from "../../assets/img/book-detail.png";
import GlobalButton from "../../components/atoms/GlobalButton";

const DetailBook = () => {
  return (
    <div className="px-[262px] mt-10">
      <div className="grid grid-cols-2 w-full">
        <div className="w-[400px] h-[577px]">
          <img src={Book2} alt="" className="w-full" />
        </div>
        <div className="w-full flex flex-col justify-between">
          <h1 className="text-[48px] font-bold font-timesroman">
            My Own Private Mr Cool
          </h1>
          <p className="text-[24px] italic text-slate-500">By Indah Hanaco</p>
          <h2 className={styles.heading2}>Publication date</h2>
          <p className={styles.heading4}>August 2018</p>
          <h2 className={styles.heading2}>Pages</h2>
          <p className={styles.heading4}>200</p>
          <h2 className={`${styles.heading2} text-red-500`}>ISBN</h2>
          <p className={styles.heading4}>9786020395227</p>
          <h2 className={styles.heading2}>Price</h2>
          <p className={`${styles.heading4} text-green-500`}>Rp. 100.000</p>
        </div>
      </div>
      <div className="mt-[80px]">
        <h1 className={`${styles.heading3} mb-10`}>
          About This Book
        </h1>
        <p className="text-justify text-slate-400 font-avanir">
          Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah
          menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza. Heidy
          meyakini lelaki itu mencintainya dengan tulus. Namun, keyakinannya
          tumbang. Pertemuan mereka bukan cuma karena campur tangan Allah
          semata. Melainkan karena skenario rapi yang berkaitan dengan materi.
          Marah sekaligus patah hati, Heidy membatalkan rencana masa depannya
          dan memilih kabur ke Italia. Langkahnya mungkin tak dewasa, tapi Heidy
          butuh ruang untuk meninjau ulang semua rencana dalam hidupnya. Lalu,
          Allah memberinya kejutan.
          <br /> <br />
          Dalam pelayaran menyusuri Venesia, Heidy
          bertemu raksasa bermata biru. Graeme MacLeod, pria yang mencuri
          napasnya di pertemuan pertama mereka. Meski ketertarikan di antara
          mereka begitu besar, Heidy tidak berniat menjalin asmara singkat.
          Graeme harus dilupakan. Ketika apa yang terjadi di Venesia tidak bisa
          tetap ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata
          lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa
          tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki itu
          terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah cinta
          memang benar-benar mampu menyatukan mereka?
        </p>
        <GlobalButton title="Add Cart" custom="w-[144px] h-[50px] float-right mt-[30px] font-avanir"/>
      </div>
    </div>
  );
};

export default DetailBook;
