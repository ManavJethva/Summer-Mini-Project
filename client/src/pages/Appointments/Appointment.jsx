import React from "react";
import { useState } from "react";

function Appointment() {
  const [date, setDate] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [choseTime, setChoseTime] = useState("");

  const handleRollNumber = (event) => {
    setRollNumber(event.target.value);
  };

  const handleChoseTime = (event) => {
    setChoseTime(event.target.value);
  };

  const handleBookAppointment = (event) => {
    event.preventDefault();
    //perform
    console.log("booking...");
    resetBookAppointment();
  };

  const resetBookAppointment = () => {
    setChoseTime("");
    setRollNumber("");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center  bg-gradient-to-r from-purple-300 to-slate-300">
      <div className="w-[100%] p-10 px-20">
        <div className="bg-cyan-100  rounded-2xl mx-auto ">
          <div className="pr-20 py-10">
            <div className="flex content-center justify-center pl-6 md:pl-20">
              <div className="w-1/2">
                <div className="flex justify-center items-center h-full">
                  <div className="text-center font-semibold pl-7"><h1 className="mb-3">Select Date</h1>
                  <input
                    type="date"
                    className="md:w-[20rem] md:h-[3rem] bg-purple-300 text-center rounded-md shadow-2xl"
                    onChange={(e) => setDate(e.target.value)}
                  /></div>
                </div>
              </div>
              <div className="w-1/2 flex content-center my-auto ml-10">
                <div className="flex flex-col mt-4">
                  <div className="mb-5">
                    <label className="text-bold">Date: {date}</label>
                  </div>
                  <div>
                    <label className="block mb-8">
                      Roll Number:{" "}
                      <input
                        type="text"
                        value={rollNumber}
                        onChange={handleRollNumber}
                        className="block w-full mt-1"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="block mb-8">
                      Time:
                      <input
                        type="time"
                        value={choseTime}
                        onChange={handleChoseTime}
                        className="block w-full mt-1"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md shadow-md"
                      onClick={handleBookAppointment}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
