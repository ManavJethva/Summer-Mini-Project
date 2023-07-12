import React, { useState } from "react";

function PrescriptionsAdmin() {
  const [disease, setDisease] = useState("");
  const [date, setDate] = useState("");
  const [medicine, setMedicine] = useState("");
  const [studentId, setStudentId] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPrescription = {
      id: Date.now(),
      disease,
      date,
      medicines: medicine.split(",").map((item) => item.trim()),
      studentId,
    };
    setPrescriptions((prevPrescriptions) => [
      ...prevPrescriptions,
      newPrescription,
    ]);
    setDisease("");
    setDate("");
    setMedicine("");
    setStudentId("");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-slate-300">
      <div className="w-[100%] p-10 px-20">
        <div className="bg-cyan-100 rounded-2xl mx-auto">
          <div className="px-8 py-4">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-20 bg-purple-300 rounded-md shadow-md">
                <div className="flex flex-col justify-between content-center py-2 md:px-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Disease Name"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                      className="m-2 font-extrabold"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Student ID"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="m-2 font-extrabold"
                    />
                  </div>
                  <div className="m-2 font-sans font-semibold">
                    <input
                      type="date"
                      placeholder="Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="bg-slate-300">
                  <textarea
                    placeholder="Medicine Name (comma-separated)"
                    value={medicine}
                    onChange={(e) => setMedicine(e.target.value)}
                    className="p-2 px-10 w-full"
                  ></textarea>
                </div>
                <button type="submit" className="bg-cyan-500 py-2 mt-2">
                  Add Prescription
                </button>
              </div>
            </form>
            {prescriptions.map((prescription) => (
              <div
                key={prescription.id}
                className="flex flex-col my-20 bg-purple-300 rounded-md shadow-md"
              >
                <div className="flex justify-between content-center py-2 md:px-5">
                  <div>
                    <p className="text-center m-2 font-extrabold">
                      {prescription.disease}
                    </p>
                    <p className="text-center m-2 font-extrabold">
                      Student ID: {prescription.studentId}
                    </p>
                  </div>
                  <div className="m-2 font-sans font-semibold ">
                    <p>{prescription.date}</p>
                  </div>
                </div>
                <div className="bg-slate-300">
                  <ul className="mt-2">
                    {prescription.medicines.map((medicine, index) => (
                      <li className="p-2 px-10" key={index}>
                        {medicine}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrescriptionsAdmin;
