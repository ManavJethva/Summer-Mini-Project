import React, { useState } from "react";
import PatientRecordAdmin from "../patientRecord/PatientRecordAdmin";
import PrescriptionsAdmin from "../Prescriptions/PrescriptionsAdmin";
import SearchHistory from "../SearchHistory/SearchHistory";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import { useNavigate } from "react-router-dom";
const AdminManagement = () => {
  const [activeSection, setActiveSection] = useState("record");
  const navigate=useNavigate();
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const onLogout=()=>{
    navigate('/');
  }

  return (
    <div className="flex flex-col justify-center content-center">
      <div className="flex justify-between content-center py-3 bg-gradient-to-r px-8 from-purple-300 to-slate-300">
        <div>
          {/* <h1>ADMIN PROFILE</h1> */}
        </div>
        <div className="flex justify-center content-center">
          <div className="pr-4">
            {/* <h1>Email</h1> */}
          </div>
          <div>
            <ButtonBlack onClick={onLogout}>Log Out</ButtonBlack>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-10 bg-gradient-to-r from-purple-300 to-slate-300">
        <button
          className={`${
            activeSection === 'record'
              ? 'bg-[#DDA0DD] hover:bg-[#BA55D3] text-white'
              : 'bg-purple-500 hover:bg-[#BA55D3] text-white'
          } font-bold py-2 px-10 rounded transition duration-300 ease-in-out mx-3`}
          onClick={() => handleButtonClick('record')}
        >
          Patient Record
        </button>
        <button
          className={`${
            activeSection === 'prescriptions'
              ? 'bg-[#DDA0DD] hover:bg-[#BA55D3] text-white'
              : 'bg-purple-500 hover:bg-[#BA55D3] text-white'
          } font-bold py-2 px-10 rounded transition duration-300 ease-in-out mx-3`}
          onClick={() => handleButtonClick('prescriptions')}
        >
          Prescriptions
        </button>
        <button
          className={`${
            activeSection === 'searchHistory'
              ? 'bg-[#DDA0DD] hover:bg-[#BA55D3] text-white'
              : 'bg-purple-500 hover:bg-[#BA55D3] text-white'
          } font-bold py-2 px-10 rounded transition duration-300 ease-in-out mx-3`}
          onClick={() => handleButtonClick('searchHistory')}
        >
          Search History
        </button>
      </div>

      {/* Render components based on the active section */}
      {activeSection === 'record' && <PatientRecordAdmin />}
      {activeSection === 'prescriptions' && <PrescriptionsAdmin />}
      {activeSection === 'searchHistory' && <SearchHistory />}
    </div>
  );
}

export default AdminManagement;
