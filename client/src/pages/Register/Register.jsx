import React, { useState } from "react";
import ladyDoctor from "../../assets/images/lady_doctor.png";

function Register() {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`User Type: ${userType}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    // Reset the form
    setUserType("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-slate-300">
      <div className=" bg-colorbgbutton flex rounded-2xl shadow-2xl">
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
        <div className=" bg-cyan-100 w-2/3 rounded-2xl ">
        <div className="my-4 text-bold ml-[4rem]">
            <h2 className="text-xl text-center">Registration</h2>
          </div>
          
          <div className="flex justify-center pr-5">
            <form onSubmit={handleSubmit} className="max-w-md pl-20">
              <div className="flex items-center justify-center my-3">
                <button
                  className={`mr-4 rounded-sm ${
                    userType === "student"
                      ? "bg-blue-500 text-white  py-2 px-8"
                      : "bg-green-500 text-white  py-2 px-8"
                  }`}
                  onClick={() => handleUserTypeChange("student")}
                >
                  Student
                </button>
                <button
                  className={`mr-4 rounded-sm ${
                    userType === "admin"
                      ? "bg-red-500 text-white py-2 px-8"
                      : "bg-gray-500 text-white  py-2 px-8"
                  }`}
                  onClick={() => handleUserTypeChange("admin")}
                >
                  Admin
                </button>
              </div>
              <label className="block mb-4">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="block w-full mt-1"
                />
              </label>
              <label className="block mb-4">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full mt-1"
                />
              </label>
              <label className="block mb-4">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="block w-full mt-1"
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
        </div>
      </div>
    </div>
  );
}

export default Register;
