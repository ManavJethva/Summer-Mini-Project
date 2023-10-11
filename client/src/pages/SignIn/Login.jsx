import React, { useState } from "react";
import ladyDoctor from "../../assets/images/lady_doctor.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [userType, setUserType] = useState("student");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const handleUserTypeChange = (userType) => {
    setUserType(userType);
    setUserId("");
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Make API call using Axios
      const response = await axios.post("https://elixir-z7dn.onrender.com/api/auth/login", {
        userId: userId,
        password: password,
        userType: userType,
      });

      // Handle the API response
      console.log("API response:", response.data);
      if(response.data.verified===false){
        toast.error("Email not verified, Please verify your email",{
          position:"top-center"
        })
      }
      
       if (response.status === 200&&response.data.verified===true) {
        // Store the JWT token in the browser's local storage
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successfull",{
          position:"top-center"
        });
        
        if (response.data.userType === "admin") {
          setTimeout(() => {
            navigate(`/admin/${response.data.userID}`);
          }, 2000);
        } else {
          setTimeout(() => {
            navigate(`/student/${response.data.userID}`);
          }, 2000); 
        }
      }
      
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error("API error:", error);
      if (error.response.status === 400) {
       toast.error("Wrong password entered!",{
        position:"top-center"
      });
      } 
       if (error.response.status === 404) 
        toast.error("User not found!",{
          position:"top-center"
        });
      
    }
  };

  const handleForgotPassword = () => {
    // Implement your forgot password 
    console.log("Forgot Password clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-slate-300">
      <div className="bg-colorbgbutton flex rounded-2xl shadow-2xl">
        <div className="w-1/3">
          <div className="text-2xl pl-5 pt-5 font-extrabold">
            <h1>
              Getting
              <br /> Started With <br />
              Elixir
            </h1>
          </div>
          <div className="md:pl-12">
            <img
              className="h-80 w-[24rem]"
              src={ladyDoctor}
              alt="ladyDoctor"
            />
          </div>
        </div>
        <div className="bg-cyan-100 w-2/3 rounded-2xl">
          <div className="my-4 text-bold ml-[3.5rem]">
            <h2 className="text-xl text-center">Login</h2>
          </div>

          <div className="flex justify-center pr-5">
            <form onSubmit={handleSubmit} className="max-w-md pl-20">
              <div className="flex items-center justify-center my-3">
                <div
                  className={`mr-4 rounded-sm ${
                    userType === "student"
                      ? "bg-blue-500 text-white py-2 px-8"
                      : "bg-gray-500 text-white py-2 px-8"
                  }`}
                  onClick={() => handleUserTypeChange("student")}
                  style={{ cursor: "pointer" }}

                >
                  Student
                </div>
                <div
                  className={`mr-4 rounded-sm ${
                    userType === "admin"
                      ? "bg-blue-500 text-white py-2 px-8"
                      : "bg-gray-500 text-white py-2 px-8"
                  }`}
                  onClick={() => handleUserTypeChange("admin")}
                  style={{ cursor: "pointer" }}
                >
                  Admin
                </div>
              </div>

              {userType ==="student" ? (
                <label className="block mb-4">
                  Roll No:
                  <input
                    type="text"
                    value={userId}
                    onChange={handleUserIdChange}
                    className="block w-full mt-1 pl-1"
                  />
                </label>
              ) : (
                <label className="block mb-4">
                  Email:
                  <input
                    type="email"
                    value={userId}
                    onChange={handleUserIdChange}
                    className="block w-full mt-1 pl-1"
                  />
                </label>
              )}
              <label className="block mb-4">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full mt-1 pl-1"
                />
              </label>
              <div className="flex flex-col justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                >
                  Login
                </button>
                <button
                  onClick={handleForgotPassword}
                  className="text-blue-500 font-semibold hover:underline mt-5"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center mt-4">
          <button
            onClick={handleRegisterRedirect}
            className="text-black font-bold hover:underline mt-5"
            style={{ marginLeft: '2.8rem' ,marginTop:"0.2rem"}}
          >
            Not registered? Register
          </button>
        </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
