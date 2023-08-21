import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ButtonBlack from "./components/Buttons/ButtonBlack";
import ButtonDim from "./components/Buttons/ButtonDim";
import ButtonPurple from "./components/Buttons/ButtonPurple";
import Landing from "./pages/landing/Landing";
import Login from './pages/SignIn/Login';
import LoginAdmin from './pages/SignIn/LoginAdmin';
import Register from './pages/Register/Register';
import RegisterAdmin from './pages/Register/RegisterAdmin';
import PatientRecord from './pages/patientRecord/PatientRecod';
import PatientRecordAdmin from './pages/patientRecord/PatientRecordAdmin';
import Prescriptions from './pages/Prescriptions/Prescriptions ';
import PrescriptionsAdmin from './pages/Prescriptions/PrescriptionsAdmin';
import Appointment from './pages/Appointments/Appointment';
import PatientManagement from './pages/StudentManagement/StudentManagement';
import AdminManagement from './pages/AdminManagement/AdminManagement';
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login/admin" element={<LoginAdmin />} />
    <Route path="/register/admin" element={<RegisterAdmin />} />
    <Route path="/student/:id" element={<PatientManagement/>} />
    <Route path="/admin/:id" element={<AdminManagement/>} />
    <Route path="/Prescriptions/:id" element={<Prescriptions />} />
    <Route path="/Prescriptions/admin/:id" element={<PrescriptionsAdmin/>}/>
    <Route path="/Appointment/:id" element={<Appointment />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
