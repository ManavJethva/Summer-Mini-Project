import Prescription from "../Models/Prescription.js";
import Student from "../Models/Student.js";
import moment from "moment"

export const currentPrescription = async (req, res) => {
    const id = req.params.id
    const currentDate = moment().startOf('day')

    await Prescription.find({ 
        patient: id,
        startDate: { $lte: currentDate },
        endDate: { $gte: currentDate }
     })
        .exec()
        .then((prescription) => {
            if (!prescription) {
                res.status(404).json({ message: "No current prescriptions found" })
            }
            res.json(prescription)
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to fetch current prescriptions" })
        })
}

export const allPrescriptions = async (req, res) => {
    const id = req.params.searchId
    await Prescription.find({ patient: id })
        .exec()
        .then((prescription) => {
            if (!prescription) {
                res.status(404).json({ message: "No prescriptions found" })
            }
            res.json(prescription)
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to fetch current prescriptions" })
        })
}

export const newPrescription = async (req, res) => {
    const { patient, Date, medicine, Disease} = req.body
    const { userType } = req.user
    
    // const parsedStartDate = moment(startDate, 'YYYY-MM-DD').toDate()
    // const parsedEndDate = moment(endDate, 'YYYY-MM-DD').toDate()

    if (userType === "admin") {
        try {
            const prescription = new Prescription({
                patient,
                Date,
                medicine,
                Disease
            })

            const savedPrescription = await prescription.save()
            const userId=patient;
            const filter = { userId };
            await Student.findOneAndUpdate(filter,
                { $push: { prescriptionHistory: savedPrescription }
            })
            
            res.status(201).json(savedPrescription)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Failed to create prescription" })
        }
     } 
    else {
        res.status(401).json({ error: "Unauthorized" })
    }
}

export const updatePrescription = async (req, res) => {
    const id = req.params.id
    const { endDate, medicine, comments } = req.body
    const { userType } = req.user
    
    if (userType === "admin" ) {
        try {
            await Prescription.findByIdAndUpdate(id, 
                { endDate, medicine, comments },
                { new: true })        
                .then((prescription) => {
                    if (!prescription) {
                        return res.status(404).json({ error: "Prescription not found! "})
                    }
                    res.json(prescription)
                })              
        } catch (error) {
            res.status(500).json({ error: "Failed to update prescription" })
          } 
    } else {
        res.status(401).json({ error: "Unauthorized" })
    }
}

export const delPrescription = async (req, res) => {
    const id = req.params.id
    const { userType } = req.user

    if (userType === "admin") {
        try {
            await Prescription.findByIdAndDelete(id)
            .then((prescription) => {
                if (!prescription) {
                    res.status(404).json({ error: "Prescription not found" })
                }
                res.status(204)
            })
        } catch (error) {
            res.status(500).json({ error: "Failed to delete prescription" })
        }
    } else {
        res.status(401).json({ error: "Unauthorized" })
    }
}

export const StudentPrescription= async(req,res)=>{
    try {
        const studentId = req.params.id;
        // Find the student by ID
        const student = await Student.findById(studentId).populate('prescriptionHistory');
    
        if (!student) {
          return res.status(404).json({ message: 'Student not found' });
        }
    
        const prescriptionHistory = student.prescriptionHistory;
        res.json(prescriptionHistory);
        
      } catch (error) {
        console.error('Error fetching prescription history:', error);
        res.status(500).json({ message: 'Server error' });
      }
    
}