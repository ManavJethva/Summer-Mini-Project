import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Appointment() {
  const [date, setDate] = useState("");
  const [patient, setpatient] = useState("");
  const [time, settime] = useState("");
  const baseUrl="http://localhost:3001";
  const handlepatient = (event) => {
    setpatient(event.target.value);
  };

  const handletime = (event) => {
    settime(event.target.value);
  };

  const handleBookAppointment = async (event) => {
    event.preventDefault();
    //perform
    const appointment={
      patient,
      date,
      time
    }
   
    const res= await axios.post(`${baseUrl}/api/appointment/book`,appointment);
    if(res.status===201){
      toast.success("Appointment Booked Successfully",{
        position:"top-center"
      });
    } 
    else if(res.status===400){
      toast.error("Selected Slot Already Booked",{
        position:"top-center"
      });
    }
    else{
      toast.error(console.error())
    }
    resetBookAppointment();
  };

  const resetBookAppointment = () => {
    settime("");
    setpatient("");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-slate-300">
      <div className="w-[100%] p-10 px-20">
        <div className="bg-cyan-100 rounded-2xl mx-auto">
          <div className="pr-20 py-10">
            <div className="flex content-center justify-center pl-6 md:pl-20">
              <div className="w-1/2">
                <div className="flex justify-center items-center h-full">
                  <div className="text-center font-semibold pl-7">
                    <h1 className="mb-3">Select Date</h1>
                    <input
                      type="date"
                      className="md:w-[20rem] md:h-[3rem] bg-purple-300 text-center uppercase rounded-md shadow-2xl p-2"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex content-center my-auto ml-10">
                <div className="flex flex-col mt-4">
                  <div className="mb-5">
                    <label className="font-semibold">Date: {date}</label>
                  </div>
                  <div>
                    <label className="block mb-8">
                      Roll Number:{" "}
                      <input
                        type="text"
                        value={patient}
                        onChange={handlepatient}
                        className="block w-full mt-1 p-2 rounded-md shadow-md"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label className="block mb-8">
                      Time:
                      <input
                        type="time"
                        value={time}
                        onChange={handletime}
                        className="block w-full mt-1 p-2 rounded-md shadow-md"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-[#DDA0DD] hover:bg-[#BA55D3] text-white font-bold py-2 px-8 rounded-md shadow-md"
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
      <ToastContainer />
    </div>
  );
  }  
export default Appointment;
