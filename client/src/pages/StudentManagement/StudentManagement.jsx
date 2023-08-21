import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientRecord from "../patientRecord/PatientRecod";
import Appointment from "../Appointments/Appointment";
import Prescriptions from "../Prescriptions/Prescriptions ";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
function PatientManagement() {
  const [activeSection, setActiveSection] = useState("record");
  const navigate = useNavigate();
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const onLogout=()=>{
    localStorage.removeItem("token");
    window.history.replaceState(null, null, "/");
    window.history.pushState(null, null, "/");
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center content-center">
      <div className="flex justify-between content-center py-3 bg-gradient-to-r px-8 from-purple-300 to-slate-300">
        <div>
          <h1>PROFILE</h1>
        </div>
        <div className="flex justify-center content-center">
          <div className="pr-4">
            <h1>Email</h1>
          </div>
          <div>
            <ButtonBlack onClick={onLogout}>Log Out</ButtonBlack>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-10 bg-gradient-to-r from-purple-300 to-slate-300">
        <button
        className={`
        ${
          activeSection === "record"
            ? "bg-[#DDA0DD] hover:bg-[#BA55D3] text-white"
            : "bg-purple-500 hover:bg-[#BA55D3] text-white"
        }
        font-bold py-2 px-10 rounded transition duration-300 ease-in-out mx-3
      `}
      
          onClick={() => handleButtonClick("record")}
        >
          Patient Record
        </button>
        <button
         className={`
         ${
           activeSection === "appointments"
             ? "bg-[#DDA0DD] hover:bg-[#BA55D3] text-white" 
             : "bg-purple-500 hover:bg-[#BA55D3] text-white"
         }
         font-bold py-2 px-10 rounded transition duration-300 ease-in-out mx-3
       `}
          onClick={() => handleButtonClick("appointments")}
        >
          Appointments
        </button>
        <button
         className={`
         ${
           activeSection === "prescriptions"
             ? "bg-[#DDA0DD] hover:bg-[#BA55D3] text-white"
             : "bg-purple-500 hover:bg-[#BA55D3] text-white"
         }
         font-bold py-2 px-10 rounded transition duration-300 ease-in-out mx-3
       `}
          onClick={() => handleButtonClick("prescriptions")}
        >
          Prescriptions
        </button>
      </div>
      {activeSection === "record" && <PatientRecord />}
      {activeSection === "appointments" && <Appointment />}
      {activeSection === "prescriptions" && <Prescriptions />}
    </div>
  );
}

export default PatientManagement;
