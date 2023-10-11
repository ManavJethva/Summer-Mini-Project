import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PrescriptionsAdmin() {
  const [Disease, setDisease] = useState("");
  const [Date, setDate] = useState("");
  const [medicine, setMedicine] = useState("");
  const [patient, setpatient] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);
  const baseUrl='https://elixir-z7dn.onrender.com';
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newPrescription = {
      // id: Date.now(),
      Disease,
      Date,
      medicine: medicine.split(",").map((item) => item.trim()),
      patient,
    };
    const authToken = localStorage.getItem("token");
    const res= await axios.post(`${baseUrl}/api/prescriptions/new`,newPrescription,{
      headers: {
        Authorization: `${authToken}` 
      }
    });
    console.log("API response:", res.data);
    if(res.status===201){
      toast.success("Prescription added Successfully",{
        position:"top-center"
      });
    }
    else if(res.status===401){
      toast.error("User Unauthorized",{
        position:"top-center"
      });
    }
    // setPrescriptions((prevPrescriptions) => [
    //   ...prevPrescriptions,
    //   newPrescription,
    // ]);
    setDisease("");
    setDate("");
    setMedicine("");
    setpatient("");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-slate-300 min-h-screen">
      <div className="w-full p-8 md:p-16">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-cyan-100 p-6 rounded-t-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Disease Name"
                value={Disease}
                onChange={(e) => setDisease(e.target.value)}
                className="p-3 rounded-md shadow-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                placeholder="Student ID"
                value={patient}
                onChange={(e) => setpatient(e.target.value)}
                className="p-3 rounded-md shadow-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="date"
                placeholder="Date"
                value={Date}
                onChange={(e) => setDate(e.target.value)}
                className="p-3 rounded-md uppercase shadow-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <div className="  bg-white rounded-md p-2">
                <textarea
                  placeholder="Medicine Name (comma-separated)"
                  value={medicine}
                  onChange={(e) => setMedicine(e.target.value)}
                  className="w-full h-32 p-3 rounded-md shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-cyan-500 text-white py-3 px-6 rounded-md shadow-lg transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                Add Prescription
              </button>
            </form>
          </div>
          {prescriptions.map((prescription) => (
            <div
              key={prescription.id}
              className="px-8 py-6 bg-purple-300 rounded-b-lg mb-8"
            >
              <div className="flex justify-between items-center pb-4 border-b border-gray-300 mb-4">
                <div className="text-2xl font-semibold">
                  {prescription.Disease}
                </div>
                <div className="text-gray-600">
                  Student ID: {prescription.patient}
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <ul>
                  {prescription.medicines.map((medicine, index) => (
                    <li
                      key={index}
                      className="p-2 border-b border-gray-300 last:border-none"
                    >
                      {medicine}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}  
export default PrescriptionsAdmin;
