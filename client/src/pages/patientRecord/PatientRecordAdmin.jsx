import React, { useState } from "react";

function PatientRecordAdmin() {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log("Searching patient record...");
    // Set the search result
    setSearchResult({
      fullName: "Roshan Jaiswal",
      dateOfBirth: "2001-10-06",
      idNumber: "2021BCS079",
      contactNumber: "9508801096",
      allergies: "NULL",
      occupation: "STUDENT",
      gender: "Male",
      bloodGroup: "A+",
      department: "CSE",
      status: "Unmarried",
      permanentAddress: "123, kathariya",
      roomNumber: "281",
      hostel: "BH1 Hostel",
      email: "rosjaiswa9@gmail.com",
    });

    setSearchId("");
  };

  return (
    <div className="flex  flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-slate-300">
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
                  className="p-2 m-2 rounded-md shadow-md"
                />
                <button type="submit" className="bg-cyan-500 py-2 px-4 rounded-md shadow-lg">
                  Search
                </button>
              </div>
            </form>
            {searchResult && (
              <div className="my-20 bg-purple-300 rounded-md shadow-md">
                <div className="flex flex-col md:flex-row justify-between content-center py-2 md:px-5">
                  <div>
                    <p className="text-center m-2 font-extrabold">
                      Full Name: {searchResult.fullName}
                    </p>
                    <p className="text-center m-2 font-extrabold">
                      Student ID: {searchId}
                    </p>
                  </div>
                  <div className="m-2 font-sans font-semibold">
                    <p>Date of Birth: {searchResult.dateOfBirth}</p>
                  </div>
                </div>
                <div className="bg-slate-300">
                  <ul className="mt-2">
                    <li className="p-2 px-10">
                      ID Number: {searchResult.idNumber}
                    </li>
                    <li className="p-2 px-10">
                      Contact Number: {searchResult.contactNumber}
                    </li>
                    <li className="p-2 px-10">
                      Allergies: {searchResult.allergies}
                    </li>
                    <li className="p-2 px-10">
                      Occupation: {searchResult.occupation}
                    </li>
                    <li className="p-2 px-10">Gender: {searchResult.gender}</li>
                    <li className="p-2 px-10">
                      Blood Group: {searchResult.bloodGroup}
                    </li>
                    <li className="p-2 px-10">
                      Department: {searchResult.department}
                    </li>
                    <li className="p-2 px-10">
                      Status: {searchResult.status}
                    </li>
                    <li className="p-2 px-10">
                      Permanent Address: {searchResult.permanentAddress}
                    </li>
                    <li className="p-2 px-10">
                      Room Number: {searchResult.roomNumber}
                    </li>
                    <li className="p-2 px-10">
                      Hostel: {searchResult.hostel}
                    </li>
                    <li className="p-2 px-10">Email: {searchResult.email}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRecordAdmin;
