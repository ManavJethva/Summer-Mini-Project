import React, { useState } from "react";
import PatientRecordAdmin from "../patientRecord/PatientRecordAdmin";
import PrescriptionsAdmin from "../Prescriptions/PrescriptionsAdmin";
import SearchHistory from "../SearchHistory/SearchHistory";
import ButtonBlack from "../../components/Buttons/ButtonBlack";

const AdminManagement = () => {
  const [activeSection, setActiveSection] = useState("record");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const onLogout=()=>{

  }

  return (
    <div className="flex flex-col justify-center content-center">
      <div className="flex justify-between content-center py-3 bg-gradient-to-r px-8 from-purple-300 to-slate-300">
        <div>
          <h1>ADMIN PROFILE</h1>
        </div>
        <div className="flex justify-center content-center">
          <div className="pr-4">
            <h1>Email</h1>
          </div>
          <div>
            <ButtonBlack onClick={onLogout()}>Log Out</ButtonBlack>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-10 bg-gradient-to-r from-purple-300 to-slate-300">
        <button
          className={`${
            activeSection === "record" ? "bg-colorbghero text-black" : "bg-purple-500"
          } hover:bg-blue-700 text-black font-bold py-2 px-10 rounded`}
          onClick={() => handleButtonClick("record")}
        >
          Patient Record
        </button>
        <button
          className={`${
            activeSection === "prescriptions" ? "bg-colorbghero text-black" : "bg-purple-500"
          } hover:bg-blue-700 text-black font-bold py-2 px-10 rounded ml-4`}
          onClick={() => handleButtonClick("prescriptions")}
        >
          Prescriptions
        </button>
        <button
          className={`${
            activeSection === "searchHistory" ? "bg-colorbghero text-black" : "bg-purple-500"
          } hover:bg-blue-700 text-black font-bold py-2 px-10 rounded ml-4`}
          onClick={() => handleButtonClick("searchHistory")}
        >
          Search History
        </button>
      </div>

      {activeSection === "record" && <PatientRecordAdmin />}
      {activeSection === "prescriptions" && <PrescriptionsAdmin />}
      {activeSection === "searchHistory" && <SearchHistory />}
    </div>
  );
}

export default AdminManagement;
