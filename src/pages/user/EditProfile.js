import React from "react";
import { BsPaperclip } from "react-icons/bs";
import { styles } from "../../style";
import { GlobalButton, GlobalInput } from "../../components";

const EditProfile = () => {
  return (
    <div className="px-[223px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Edit Profile</h1>
      <form action="">
        <GlobalInput placeholder="Nmae" />
        <GlobalInput placeholder="Email" />
        <GlobalInput placeholder="Password" />
        <label
          htmlFor="uploadimage"
          className="border w-[218px] h-[50px] flex items-center justify-center rounded"
        >
          Upload Image
          <BsPaperclip className="text-xl" />
        </label>
        <GlobalInput type="file" id="uploadimage" hidden />
        <GlobalButton title="Save" custom="float-right w-[150px] h-[50px]" />
      </form>
    </div>
  );
};

export default EditProfile;
