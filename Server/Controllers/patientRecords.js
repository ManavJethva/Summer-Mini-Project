import Student from "../Models/Student.js";

export const viewProfile = async (req, res) => {
    const id = req.params.id
    
    await Student.findById(id)
        // .populate("appointmentHistory", "prescriptionHistory")
        // .exec()
        .then((student) => {
            if (!student) {
                return res.status(404).json({ error: "Patient not found" })
            }

            res.json(student)
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to fetch patient details"})
        })
}

export const updateProfile = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        updatedData,
        { new: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      res.json(updatedStudent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update student profile' });
    }
  }


export const deleteProfile = async (req, res) => {
    const id = req.params.id
    
    await Student.findByIdAndDelete(id)
        .then((patient) => {
            if (!patient) {
                return res.status(404).json({ error: "Patient not found" })
            }

            res.sendStatus(204)
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to delete patient record" })
        })
}

export const AdminviewProfile = async (req, res) => {
    const rollNo = req.params.searchId; // Assuming the parameter name is rollNo
    
    await Student.findOne({ userId: rollNo}) 
        .then((student) => {
            if (!student) {
                return res.status(404).json({ error: "Patient not found" });
            }

            res.json(student);
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to fetch patient details" });
        });
};

