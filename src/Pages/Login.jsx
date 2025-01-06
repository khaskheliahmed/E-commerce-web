import React, { useState } from "react";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data login", data);
    // Add your login logic here
  };

  return (
    <>
      <section id="login">
        <div className="max-auto container p-4">
          <div className="bg-white py-5 w-full p-2 max-w-sm mx-auto">
            <div className="w-20 h-20 mx-auto">
              <FaUserCircle className="h-20 w-20 mx-auto" />
            </div>
            <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
              <div className="grid">
                <label>Email: </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label>Password: </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={data.password}
                    name="password"
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <Link
                  to={"/forgotpassword"}
                  className="block w-fit ml-auto hover:underline hover:text-red-600"
                >
                  Forgot password?
                </Link>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                Login
              </button>
            </form>

            <p className="my-5">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-red-600 hover:text-red-700 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
