import React, { useState } from "react";
import axios from "axios";
import ladyDoctor from "../../assets/images/lady_doctor.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  // const [userType, setUserType] = useState("student");
  const [name, setName] = useState("");
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleUserTypeChange = (userType) => {
  //   setUserType(userType);
  //   setuserId("");
  // };
  const userType="student"
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleuserIdChange = (event) => {
    setuserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const validateRollNumber = () => {
    const rollNumberRegex = /^[a-zA-Z]{3}_\d{7}$/;
    return rollNumberRegex.test(userId);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateRollNumber() === false) {
      return toast.error('Please enter the roll number in the correct format.', {
        position: "top-center"
      });
    }
    console.log(`User Type: ${userType}`);
    console.log(`Name: ${name}`);
    console.log(`userId: ${userId}`);
    const data = {
      name,
      userId,
      password,
      userType,
    };
    setName("");
    setuserId("");
    setPassword("");

    const url = 'http://localhost:3001/api/auth/register';

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        setName("");
        setuserId("");
        setPassword("");
        console.log(response.data)
        if (response.data.verified === true) {
          toast.success("Verification email sent", {
            position: "top-center"
          });
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 409)
          toast.error("User Already exists", {
            position: "top-center"
          })
      });
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
            <img className="h-80 w-[24rem]" src={ladyDoctor} alt="ladyDoctor" />
          </div>
        </div>
        <div className="bg-cyan-100 w-2/3 rounded-2xl">
          <div className="my-4 text-bold ml-[4rem]">
            <h2 className="text-xl text-center">Registration</h2>
          </div>

          <div className="flex justify-center pr-5">
            <form onSubmit={handleFormSubmit} className="max-w-md pl-20">
              <label className="block mb-4">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="block w-full mt-1 pl-1"
                />
              </label>
              <label className="block mb-4">
                Roll No:
                <input
                  type="text"
                  value={userId}
                  onChange={handleuserIdChange}
                  className="block w-full mt-1 pl-1"
                  placeholder="bcs_2021XXX"
                />
              </label>
              <label className="block mb-4">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full mt-1 pl-1"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 ml-[3.5rem] rounded"
              >
                Register
              </button>
            </form>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoginRedirect}
              className="text-black font-bold hover:underline mt-5"
              style={{ marginLeft: '2.8rem', marginTop: "0.2rem" }}
            >
              Already registered? Login
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
