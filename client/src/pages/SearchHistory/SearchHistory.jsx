import React, { useState } from "react";
import axios from "axios";
function SearchHistory() {
  const [searchId, setSearchId] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const baseurl="https://elixir-z7dn.onrender.com";

  const handleSearch = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${baseurl}/api/prescriptions/all/${searchId}`);
      const prescriptions = response.data;
      setSearchResults(prescriptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-slate-300">
      <div className="w-[100%] p-10 px-20">
        <div className="bg-cyan-100 rounded-2xl mx-auto">
          <div className="px-8 py-4">
            <form onSubmit={handleSearch}>
              <div className="flex justify-center content-center py-2">
                <input
                  type="text"
                  placeholder="Search by Student ID"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="p-2 m-2 rounded-sm shadow-md"
                />
                <button type="submit" className="bg-cyan-500 py-2 px-4 rounded-md shadow-md">
                  Search
                </button>
              </div>
            </form>
            {searchResults.map((prescription) => (
              <div
                key={prescription._id}
                className="flex flex-col my-20 bg-purple-300 rounded-md shadow-md"
              >
                <div className="flex justify-between content-center py-2 md:px-5">
                  <div>
                    <p className="text-center m-2 font-extrabold">
                      {prescription.Disease}
                    </p>
                    <p className="text-center m-2 font-extrabold">
                      Student ID: {prescription.patient}
                    </p>
                  </div>
                  <div className="m-2 font-sans font-semibold">
                    <p>{prescription.Date}</p>
                  </div>
                </div>
                <div className="bg-slate-300">
                  <ul className="mt-2">
                    {prescription.medicine.map((medicine, index) => (
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

export default SearchHistory;
