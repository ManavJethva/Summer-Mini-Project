// import Student from "../Models/Student.js"
import Appointment from "../Models/Appointment.js"

// appointment slots - date and time
export const timeSlots = (req, res) => {
    const { date } = req.body;
    const startTime = new Date(date);
    startTime.setHours(9, 0, 0); 
    const endTime = new Date(date);
    endTime.setHours(17, 0, 0);
    const slots = [];

    while (startTime < endTime) {
        const formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const hour = startTime.getHours();
        if (hour !== 13) { // 1 pm to 2 pm === lunchBreak()
        slots.push(formattedTime);
        }
        startTime.setTime(startTime.getTime() + 30 * 60 * 1000); // increment by 30 minutes
    }

    Appointment.find({ date }) // find existing appointments for the given date
        .then((appointments) => {
        const bookedSlots = appointments.reduce((acc, appointment) => {
            return acc.concat(appointment.time);
        }, []);

        const availableSlots = slots.filter((slot) => {
            return !bookedSlots.includes(slot);
        });
        res.json({ slots: availableSlots });
        })
        .catch((error) => {
        res.status(500).json({ error: 'Failed to fetch appointment slots' });
        });

}

export const bookAppt = (req, res) => {
    const { date, time, patient, dept, complaint } = req.body;

    Appointment.findOne({ date, time }) // Check if the slot is available
        .then((existingAppointment) => {
        if (existingAppointment) {
            return res.status(400).json({ error: 'The selected slot is already booked' });
        }

        const appointment = new Appointment({
            date,
            time,
            patient,
            dept,
            complaint
        });

        appointment.save()
            .then((result) => {
            const { slots } = req.app.locals;
            const updatedSlots = slots.filter((slot) => slot !== time);
            req.app.locals.slots = updatedSlots;

            res.status(201).json(result);
            })
            .catch((error) => {
            res.status(500).json({ error: 'Failed to create appointment' });
            console.log(error)
            });
        })
        .catch((error) => {
        res.status(500).json({ error: 'Failed to check slot availability' });
        });
}

export const viewAppt = (req, res) => {

}

export const updateAppt = (req, res) => {

}

export const cancelAppt = (req, res) => {

}