import * as React from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../components/context/UserContext";
import { API } from "../../config/api";
import { useQuery } from "react-query";

const Profile = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  let { data: userTransaction, refetch } = useQuery(
    "userTransactionCache",
    async () => {
      const response = await API.get("/transaction");

      return response.data.data;
    }
  );

  console.log(userTransaction);

  const [user, setUser] = React.useState(null);

  const [state] = React.useContext(UserContext);

  const getUser = async () => {
    try {
      setIsLoading(true);
      const response = await API.get(`/user/${state.user.id}`);
      setUser(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (state.user) {
      getUser();
      refetch();
    }
  }, [state]);
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
        <div className="px-[222px]">
          <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Profile</h1>
          <div className="grid grid-cols-2 bg-red-100 rounded">
            <div className="p-10">
              <div className={styles.flexCenter2}>
                <img src={Emailicon} alt="" className={styles.iconProfile} />
                <div>
                  <h4 className={styles.infoHeading1}>{user?.email}</h4>
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
                  <h4 className={styles.infoHeading1}>
                    {user?.gender ? user?.gender : "unknown"}
                  </h4>
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
                  <h4 className={styles.infoHeading1}>
                    {user?.phone
                      ? user?.phone
                      : "Haven't set a phone number yet"}
                  </h4>
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
                    {user?.address
                      ? user?.address
                      : "Haven't set a address yet"}
                  </h4>
                  <p className={styles.infoHeading2}>Address</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end p-10">
              <img
                src={user?.image}
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
            {userTransaction?.length !== undefined ? (
              <div className="grid grid-cols-4">
                {userTransaction[0]?.books.map((item) => (
                  <div className="flex flex-col justify-between w-[200px]">
                    <img src={item?.thumbnail} alt="" className="w-full" />
                    <h1 className="text-[24px] font-bold">{item?.title}</h1>
                    <p className="text-[14px] text-slate-400 italic mb-[21px]">
                      By. {item?.author}
                    </p>
                    <GlobalButton
                      title="Download"
                      custom="w-full h-[40px] font-avanir mb-20"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
