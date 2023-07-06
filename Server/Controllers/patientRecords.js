import Student from "../Models/Student.js";

export const viewProfile = async (req, res) => {
    const id = req.params.id

    await Student.findById(id)
        .populate("appointmentHistory", "prescriptionHistory")
        .exec()
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
    const id = req.params.id
    const { name, bloodGroup, gender, allergies } = req.body

    await Student.findByIdAndUpdate(id,
        { name, bloodGroup, gender, allergies },
        { new: true })
        .then((patient) => {
            if(!patient) {
                return res.status(404).json({ error: "Patient not found" })
            }
            res.json(patient)
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to update patient details" })
        })
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