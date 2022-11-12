import * as React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import GlobalButton from "../atoms/button/GlobalButton";
import { UserContext } from "../context/UserContext";

const Login = ({
  showModalLogin,
  setShowModalLogin,
  setShowModalRegister,
  setIsLogin,
}) => {
  const navigate = useNavigate();

  const [state, dispacth] = React.useContext(UserContext);

  const [message, setMessage] = React.useState(null);

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const data = await API.post("/login", form);

      const alert = <div>Success Login</div>;

      setMessage(alert);

      let payload = data.data.data;

      dispacth({
        type: "LOGIN_SUCCESS",
        payload,
      });

      setShowModalLogin(false);

      if (payload.role === "admin") {
        navigate("/income-transaction");
        return;
      }
    } catch (error) {
      console.log(error);
      const alert = <div>Email Password Salah</div>;
      setMessage(alert);
    }
  });
  return (
    <>
      {showModalLogin ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[400px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold font-timesroman">
                    Login
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalLogin(false)}
                  >
                    <span className="text-slate-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <input
                      type="Email"
                      placeholder="Email"
                      name="email"
                      onChange={handleOnChange}
                      value={email}
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleOnChange}
                      value={password}
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                    />
                    <GlobalButton
                      title="Login"
                      custom="w-full py-[9px] mb-5"
                      type="submit"
                    />
                    <p className="text-center">
                      Don't have an account ?{" "}
                      <span
                        onClick={() => {
                          setShowModalRegister(true);
                          setShowModalLogin(false);
                        }}
                        className="text-blue-500 cursor-pointer"
                      >
                        Click Here
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Login;
