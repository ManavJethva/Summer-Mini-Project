import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function PatientRecord() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [allergies, setAllergies] = useState("");
  const [occupation, setOccupation] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [hostel, setHostel] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const baseUrl='https://elixir-z7dn.onrender.com'
  
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleAllergiesChange = (event) => {
    setAllergies(event.target.value);
  };

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePermanentAddressChange = (event) => {
    setPermanentAddress(event.target.value);
  };

  const handleRoomNumberChange = (event) => {
    setRoomNumber(event.target.value);
  };

  const handleHostelChange = (event) => {
    setHostel(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        // Replace with actual API endpoint for fetching user data
        setIsEditing(true);
        const response = await axios.get(`${baseUrl}/api/patientRecords/profile/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const updateProfile = async (updatedData) => {
    try {
      // Replace with actual API endpoint for updating user profile
      const response = await axios.put(`${baseUrl}/api/patientRecords/update/${userId}`, updatedData);

      if (response.ok) {
        console.log("Profile updated successfully");
        // Optionally, you can update the user data after successful update
        setUserData(updatedData);
        }
       //else {
      //   console.error("Failed to update profile");
      // }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    // Populate form fields with user data if available
    if (userData) {
      setFullName(userData.name || "");
      const formattedDateOfBirth = new Date(userData.dateOfBirth).toISOString().slice(0, 10);
      setDateOfBirth(formattedDateOfBirth || "");
      setIdNumber(userData.userId || "");
      setContactNumber(userData.contactNumber || "");
      setAllergies(userData.allergies || "");
      setOccupation(userData.occupation || "");
      setGender(userData.gender || "");
      setBloodGroup(userData.bloodGroup || "");
      setDepartment(userData.department || "");
      setStatus(userData.status || "");
      setPermanentAddress(userData.permanentAddress || "");
      setRoomNumber(userData.roomNumber || "");
      setHostel(userData.hostel || "");
      setEmail(userData.email || "");
    }
  }, [userData]);

 

  const handleSave = async (event) => {
    event.preventDefault();
    // Prepare updated data
    const formattedDateOfBirth = new Date(dateOfBirth).toISOString().slice(0, 10);
    const updatedData = {
      name: fullName,
      dateOfBirth: formattedDateOfBirth,
      userId: idNumber,
      contactNumber,
      allergies,
      occupation,
      gender,
      bloodGroup,
      department,
      status,
      permanentAddress,
      roomNumber,
      hostel,
      email,
    };
    

    // Call updateProfile function
    await updateProfile(updatedData);

    // Disable editing
    
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };


  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-slate-300">
    <div className="w-[100%] p-10 px-20">
      <div className="bg-cyan-100 rounded-2xl mx-auto">
        <div className="pr-10 py-10">
          <form className="pl-20">
              <div className="md:grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-4">
                    Full Name<span className="text-red-500">*</span>:
                    <input
                      type="text"
                      value={fullName}
                      onChange={handleFullNameChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Date of Birth<span className="text-red-500">*</span>:
                    <input
                      type="date"
                      value={dateOfBirth}
                      onChange={handleDateOfBirthChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Roll Number<span className="text-red-500">*</span>:
                    <input
                      type="text"
                      value={idNumber}
                      onChange={handleIdNumberChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Contact Number<span className="text-red-500">*</span>:
                    <input
                      type="number"
                      value={contactNumber}
                      onChange={handleContactNumberChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Allergies<span className="text-red-500">*</span>:
                    <input
                      type="text"
                      value={allergies}
                      onChange={handleAllergiesChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Occupation<span className="text-red-500">*</span>:
                    <select
                      value={occupation}
                      onChange={handleOccupationChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    >
                      <option value="">- Select -</option>
                      <option value="Professor">Professor</option>
                      <option value="Student">Student</option>
                      <option value="Worker">Worker</option>
                      <option value="Others">Others</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Gender<span className="text-red-500">*</span>:
                    <select
                      value={gender}
                      onChange={handleGenderChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    >
                      <option value="">- Select -</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Blood Group<span className="text-red-500">*</span>:
                    <select
                      value={bloodGroup}
                      onChange={handleBloodGroupChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    >
                      <option value="">- Select -</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Department<span className="text-red-500">*</span>:
                    <select
                      type="text"
                      value={department}
                      onChange={handleDepartmentChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    >
                      <option value="">- Select -</option>
                      <option value="CSE">
                        Computer Science and Engineering
                      </option>
                      <option value="EEE">
                        Electrical and Electronics Engineering
                      </option>
                      <option value="MS">Management Studies</option>
                      <option value="ES">Engineering Sciences</option>
                      <option value="IT">Information Technology</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Status<span className="text-red-500">*</span>:
                    <select
                      type="text"
                      value={status}
                      onChange={handleStatusChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    >
                      <option value="">- Select -</option>
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                   Permanent Address:
                    <input
                      type="text"
                      value={permanentAddress}
                      onChange={handlePermanentAddressChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Room Number<span className="text-red-500">*</span>:
                    <input
                      type="number"
                      value={roomNumber}
                      onChange={handleRoomNumberChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Hostel<span className="text-red-500">*</span>:
                    <input
                      type="text"
                      value={hostel}
                      onChange={handleHostelChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
                <div>
                  <label className="block mb-4">
                    Email<span className="text-red-500">*</span>:
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className={`block w-full mt-1 p-2 rounded ${
                        !isEditing ? 'bg-gray-100' : ''
                      }`}
                      required
                      disabled={!isEditing}
                    />
                  </label>
                </div>
              </div>

              {isEditing ? (
                <div className="flex flex-col md:flex-row mt-8">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 w-32 md:mr-4 rounded"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 w-32 mt-3 md:mt-0 rounded"
                    // onClick={resetForm}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="mt-8">
                  <button
                    type="button"
                    className="bg-[#DDA0DD] hover:bg-[#BA55D3] text-white font-bold py-2 px-10 rounded"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRecord;

