import React from "react";
import { BsPaperclip } from "react-icons/bs";
import { styles } from "../../style";
import { GlobalInput, GlobalButton } from "../../components";
import { Bookicon } from "../../assets";

const AddBook = () => {
  return (
    <div className="px-[223px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Add Book</h1>
      <form action="">
        <GlobalInput placeholder="Title" />
        <div>
          <label htmlFor="date" className="font-avanir italic">
            Publication Date
          </label>
          <GlobalInput
            type="date"
            id="date"
            placeholder="Publication Date"
            custom="mt-2"
          />
        </div>
        <GlobalInput placeholder="Pages" />
        <GlobalInput placeholder="ISBN" />
        <GlobalInput placeholder="Price" />
        <GlobalInput
          placeholder="About This Book"
          custom="h-[202px] pb-[150px]"
        />
        <label
          htmlFor="uploadBook"
          className="border w-[218px] h-[50px] flex items-center justify-center rounded"
        >
          Attach Book File
          <BsPaperclip className="text-xl" />
        </label>
        <GlobalInput type="file" id="uploadBook" hidden />
        <button className="bg-primary float-right flex items-center rounded justify-center w-[150px] h-[50px]">
          <span className="text-white pr-2">Add Book</span>
          <img src={Bookicon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default AddBook;
