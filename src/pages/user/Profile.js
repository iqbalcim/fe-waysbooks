import React from "react";
import { styles } from "../../style";
import {
  Profile1,
  Emailicon,
  Gendericon,
  Phoneicon,
  Addressicon,
} from "../../assets";
import { GlobalButton } from "../../components";
import Book from "../../assets/img/book1.png";
import { convert } from "rupiah-format";
import { useNavigate } from "react-router-dom";

const Profile = () => {
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
  ];
  return (
    <div className="px-[222px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Profile</h1>
      <div className="grid grid-cols-2 bg-red-100 rounded">
        <div className="p-10">
          <div className={styles.flexCenter2}>
            <img src={Emailicon} alt="" className={styles.iconProfile} />
            <div>
              <h4 className={styles.infoHeading1}>user@gmail.com</h4>
              <p className={styles.infoHeading2}>Email</p>
            </div>
          </div>
          <div className={styles.flexCenter2}>
            <img
              src={Gendericon}
              alt=""
              className={`${styles.iconProfile} w-[30px] h-[37px]`}
            />
            <div>
              <h4 className={styles.infoHeading1}>Male</h4>
              <p className={styles.infoHeading2}>Gender</p>
            </div>
          </div>
          <div className={styles.flexCenter2}>
            <img
              src={Phoneicon}
              alt=""
              className={`${styles.iconProfile} w-[27px] h-[27px]`}
            />
            <div>
              <h4 className={styles.infoHeading1}>08123213213</h4>
              <p className={styles.infoHeading2}>Mobile Phone</p>
            </div>
          </div>
          <div className={`${styles.flexCenter2} mb-0`}>
            <img
              src={Addressicon}
              alt=""
              className={`${styles.iconProfile} w-[21px] h-[30px]`}
            />
            <div>
              <h4 className={styles.infoHeading1}>
                Perumahan Permata Bintaro C-3
              </h4>
              <p className={styles.infoHeading2}>Address</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end p-10">
          <img
            src={Profile1}
            alt=""
            className="w-[226px] h-[202px] mb-[14px]"
          />
          <GlobalButton
            title="Edit Profile"
            onClick={() => navigate("/edit-profile")}
            bg="bg-red-600"
            custom="h-[50px]
          w-[227px]"
          />
        </div>
      </div>
      {/* My Books */}
      <div className="mt-[77px]">
        <h1 className="text-[36px] font-bold mb-[42px] font-timesroman">
          My Books
        </h1>
        <div className="grid grid-cols-4">
          {books.map((book) => (
            <div className="w-[200px] h-[270px]">
              <img src={book.image} alt="" className="w-full" />
              <h1 className="text-[24px] font-bold">{book.title}</h1>
              <p className="text-[14px] text-slate-400 italic mb-[21px]">
                By. {book.author}
              </p>
              <GlobalButton
                title="Download"
                custom="w-full h-[40px] font-avanir mb-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
