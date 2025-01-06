import React, { useState } from "react";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTobase64 from "../Helper/ImageTobase64"


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No file selected!");
      return;
    }

    try {
      const imagePic = await imageTobase64(file);
      setData((prev) => ({
        ...prev,
        profilePic: imagePic,
      }));
    } catch (error) {
      console.error("Error converting image to base64:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Data:", data);
    // Add your registration logic here
  };

  return (
    <section id="register" className="p-6">
      <div className="max-auto container">
        <div className="bg-white py-5 w-full p-4 max-w-sm mx-auto shadow-lg">
          <div className="w-20 h-20 mx-auto mb-4">
            <FaUserCircle className="h-20 w-20 mx-auto text-gray-600" />
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label>Password:</label>
              <div className="flex items-center border rounded-md">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  placeholder="Enter your password"
                  className="w-full p-2 outline-none"
                />
                <span
                  className="p-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div>
              <label>Confirm Password:</label>
              <div className="flex items-center border rounded-md">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm your password"
                  className="w-full p-2 outline-none"
                />
                <span
                  className="p-2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div>
              <label>Profile Picture:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadPic}
                className="w-full p-2 border rounded-md"
              />
              {data.profilePic && (
                <img
                  src={data.profilePic}
                  alt="Profile Preview"
                  className="mt-2 w-20 h-20 rounded-full"
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
