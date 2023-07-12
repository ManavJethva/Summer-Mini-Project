import React, { useState } from "react";

function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      disease: "Disease 1",
      date: "June 21, 2023",
      medicines: ["Medicine 1", "Medicine 2", "Medicine 3"],
    },
    {
      id: 2,
      disease: "Disease 2",
      date: "June 22, 2023",
      medicines: ["Medicine 4", "Medicine 5", "Medicine 6"],
    },
    {
      id: 2,
      disease: "Disease 2",
      date: "June 22, 2023",
      medicines: ["Medicine 4", "Medicine 5", "Medicine 6"],
    },
    {
      id: 2,
      disease: "Disease 2",
      date: "June 22, 2023",
      medicines: ["Medicine 4", "Medicine 5", "Medicine 6"],
    },
    {
      id: 2,
      disease: "Disease 2",
      date: "June 22, 2023",
      medicines: ["Medicine ", "Medicine ", "Medicine ","dfsdfsdfd","sdfsdfsdfdsf"],
    },
    
    // Add more prescriptions as needed
  ]);

  return (
    <div className="flex flex-col items-center justify-center  bg-gradient-to-r from-purple-300 to-slate-300">
      <div className="w-[100%] p-10 px-20">
        <div className="bg-cyan-100 rounded-2xl mx-auto ">
          <div className="px-8 py-4">
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
                  </div>
                  <div className=" m-2 font-sans font-semibold ">
                    <p>{prescription.date}</p>
                  </div>
                </div>

                <div className='bg-slate-300'>
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

export default Prescriptions;

  