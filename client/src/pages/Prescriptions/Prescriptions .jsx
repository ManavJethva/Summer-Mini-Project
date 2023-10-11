import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
 function Prescriptions() {
  const { id: Id } = useParams();
  const baseurl = "https://elixir-z7dn.onrender.com";
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/prescriptions/alll/${Id}`);
        const prescriptions = response.data;
        setSearchResults(prescriptions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Id]);
 
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-slate-300">
      <div className="w-full p-10">
        <div className="bg-cyan-100 rounded-2xl mx-auto">
          <div className="px-8 py-4">
            {searchResults.map((prescription) => (
              <div
                key={prescription.patient}
                className="my-6 bg-purple-300 rounded-md shadow-md p-4"
              >
                <div className="flex justify-between items-center py-2">
                  <p className="text-xl font-semibold">{prescription.Disease}</p>
                  <p className="text-gray-600">{prescription.Date}</p>
                </div>
  
                <div className="bg-slate-300 p-4 mt-2">
                  <ul>
                    {prescription.medicine.map((medicine, index) => (
                      <li key={index} className="p-2 px-4">
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

  