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

      const filterStatus = response.data.data.filter(
        (item) => item.status === "success"
      );

      console.log(filterStatus);
      return filterStatus;
    }
  );

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
        <>
          <h1>Loading ...</h1>
        </>
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
