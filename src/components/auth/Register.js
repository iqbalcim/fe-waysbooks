import GlobalButton from "../atoms/button/GlobalButton";
const Register = ({
  showModalRegister,
  setShowModalRegister,
  setShowModalLogin,
}) => {
  return (
    <>
      {showModalRegister ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[400px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold font-timesroman">
                    Register
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModalRegister(false)}
                  >
                    <span className="text-slate-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <input
                      name="email"
                      placeholder="Email"
                      className="shadow-md p-3 rounded-md w-full border mb-5 mt-5"
                      required
                    />
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                      required
                    />
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      className="shadow-md p-3 rounded-md w-full border mb-5"
                      required
                    />
                    <GlobalButton
                      title="Register"
                      custom="w-full py-[9px] mb-5"
                    />
                    <p className="text-center">
                      Already have an account ?{" "}
                      <span
                        onClick={() => {
                          setShowModalRegister(false);
                          setShowModalLogin(true);
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

export default Register;
